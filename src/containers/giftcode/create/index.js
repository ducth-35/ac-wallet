import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { isEmpty } from 'lodash';
import ActionSheet from 'react-native-actionsheet';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { formatCommaNumber } from '@/utils';
import {
  NavTitleBackHeader,
  BlueButton,
  SelectCoins,
  TouchableX,
  AutoSuggest,
} from '@/components';
import { useTranslation, useAppContext, useDebounce } from '@/hooks';
import {
  Routes,
  SUPPORTED_GIFTCODE_COINS,
  GIFTCODE_CONDITIONS,
  showLoading,
  showSuccessToast,
  showErrorToast,
} from '@/common';
import { NavigationService } from '@/services';
import { Colors, actuatedNormalize } from '@/themes';

import styles from './styles';

export const CreateGiftCodeStep1 = () => {
  const { t } = useTranslation();

  const [selectedCoin, setSelectedCoin] = useState(null);

  const onSelectedCoin = (item) => {
    setSelectedCoin(item);
  };

  const onContinue = () => {
    if (selectedCoin) {
      NavigationService.navigate(Routes.CREATE_GIFTCODE_STEP_2, {
        coin: selectedCoin,
      });
    }
  };

  return (
    <View style={styles.container}>
      <NavTitleBackHeader
        containerStyle={styles.navHeader}
        title={t('create_giftcode')}
      />
      <Text style={styles.headerText}>{t('create_giftcode_title')}</Text>
      <SelectCoins
        coins={SUPPORTED_GIFTCODE_COINS}
        onSelected={onSelectedCoin}
      />
      <BlueButton
        title={t('continue')}
        containerStyle={styles.continueButton}
        isActive={selectedCoin ? true : false}
        onPress={onContinue}
      />
    </View>
  );
};

export const CreateGiftCodeStep2 = ({ route }) => {
  const coin = route.params?.coin;

  const { t } = useTranslation();
  const {
    getUserWallets,
    userWallets,
    getListGiftcode,
    createGiftCode,
    accountInfo,
    searchUsers,
  } = useAppContext();

  const [giftCodeType, setGiftCodeType] = useState(null);
  const [amount, setAmount] = useState('0');
  const [quantity, setQuantity] = useState('1');
  const [availableCoin, setAvailableCoin] = useState(0);
  const [pincode, setPincode] = useState(null);
  const [content, setContent] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isHideSearchResults, setIsHideSearchResults] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [seachKeyword, setSearchKeyword] = useState(null);
  const actionsSheetTypeRef = useRef(null);
  const debouncedSearchKeyword = useDebounce(seachKeyword, 500);

  useEffect(() => {
    const publicType = GIFTCODE_CONDITIONS.find((item) => item.id === 'public');
    setGiftCodeType(publicType);

    getAvailableCoin();
  }, []);

  useEffect(() => {
    if (debouncedSearchKeyword) {
      onSearchUsers();
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchKeyword]);

  const conditionOptions = [
    ...GIFTCODE_CONDITIONS.map((item) => t(`${item.id}`)),
    t('cancel'),
  ];

  const onShowActionSheetType = () => {
    if (actionsSheetTypeRef) {
      actionsSheetTypeRef.current.show();
    }
  };

  const getAvailableCoin = () => {
    if (userWallets) {
      const existingCoin = userWallets.find(
        (item) => item.type.toLowerCase() === coin?.id,
      );

      if (existingCoin) {
        setAvailableCoin(existingCoin);
      }
    }
  };

  const onCreateGiftCode = async () => {
    let errorMessage = null;

    const conditions = JSON.parse(giftCodeType.value);

    if (isEmpty(quantity) || parseInt(quantity) === 0) {
      errorMessage = t('invalid_quantity');
    } else if (isEmpty(amount) || parseFloat(amount) === 0) {
      errorMessage = t('invalid_amount');
    } else if (isEmpty(content)) {
      errorMessage = t('invalid_content');
    } else if (conditions.type === 'private') {
      if (isEmpty(pincode)) {
        errorMessage = t('invalid_pincode');
      }
    } else if (conditions.type === 'fixedReceiver') {
      if (isEmpty(selectedUser)) {
        errorMessage = t('invalid_address');
      }
    }

    if (errorMessage) {
      showErrorToast(errorMessage);
      return;
    }

    if (conditions.type === 'private') {
      conditions.pin = pincode;
    } else if (conditions.type === 'fixedSender') {
      conditions.uid = accountInfo.id;
    } else if (conditions.type === 'fixedReceiver') {
      conditions.uid = selectedUser.id;
    }

    const params = {
      currencyCode: coin.currencyCode,
      quantity: amount,
      number: quantity,
      conditions: conditions,
    };

    showLoading();

    const res = await createGiftCode(params);

    if (res.status) {
      showSuccessToast(t('create_giftcode_success'));
      getUserWallets();
      getListGiftcode();
      NavigationService.popToTop();
    }
  };

  const renderConditionView = () => {
    if (!giftCodeType) {
      return null;
    }

    switch (giftCodeType.id) {
      case 'public':
        return renderConditionPublic();
      case 'password_required':
        return renderConditionPrivate();
      case 'authenticate_sender':
        return renderConditionAuthenSender();
      case 'recipients_indentified':
        return renderConditionReceipients();
    }
  };

  const renderConditionPublic = () => {
    return (
      <View style={styles.conditionContainer}>
        <Text style={styles.note}>{t('note_giftcode_public')}</Text>
      </View>
    );
  };

  const renderConditionPrivate = () => {
    return (
      <View style={styles.conditionContainer}>
        <Text style={styles.note}>{t('note_giftcode_private')}</Text>
        <Text style={[styles.title, { marginTop: actuatedNormalize(20) }]}>
          {t('pincode').toUpperCase()}
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.leftContainer}>
            <TextInput
              style={[styles.input, { color: Colors.GREY }]}
              placeholderTextColor={Colors.GREY}
              onChangeText={(value) => setPincode(value)}
              value={pincode ? pincode : ''}
            />
          </View>
        </View>
      </View>
    );
  };

  const renderConditionAuthenSender = () => {
    return (
      <View style={styles.conditionContainer}>
        <Text style={styles.note}>{t('note_giftcode_authen_sender')}</Text>
      </View>
    );
  };

  const renderConditionReceipients = () => {
    return (
      <View style={styles.conditionContainer}>
        <Text style={styles.note}>{t('note_giftcode_recipients')}</Text>
        <View style={styles.searchContainer}>
          <Text style={styles.title}>
            {t('seach_recipients').toUpperCase()}
          </Text>
          <View style={[styles.inputContainer, { zIndex: 1 }]}>
            <View
              style={[
                styles.autocompleteContainer,
                { rightContainer: isSearching ? actuatedNormalize(40) : 0 },
              ]}>
              <AutoSuggest
                inputContainerStyle={{ borderWidth: 0 }}
                data={searchResults}
                hideResults={isHideSearchResults}
                renderItem={({ item, i }) => (
                  <TouchableX
                    style={styles.searchItemContainer}
                    onPress={() => onSelectedSearchUser(item)}>
                    <Text>
                      {item.nickName.toUpperCase()} ({item.email})
                    </Text>
                  </TouchableX>
                )}
                renderTextInput={() => {
                  return (
                    <TextInput
                      style={styles.input}
                      placeholder={t('seach_recipients_place_holder')}
                      placeholderTextColor={Colors.GREY}
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={(text) => {
                        setSearchKeyword(text);
                      }}
                    />
                  );
                }}
                keyExtractor={(item, index) => `${item.id}-${index}`}
              />
            </View>
            {isSearching && (
              <View style={styles.searchingContainer}>
                <ActivityIndicator size="small" color={Colors.WHITE} />
              </View>
            )}
          </View>
        </View>
        <Text style={[styles.title, { marginTop: actuatedNormalize(10) }]}>
          {t('recipient').toUpperCase()}
        </Text>
        <View
          style={[
            styles.inputContainer,
            { backgroundColor: Colors.DARK_GREY },
          ]}>
          <View style={styles.leftContainer}>
            <TextInput
              style={[styles.input, { color: Colors.GREY }]}
              editable={false}
              value={
                selectedUser
                  ? `${selectedUser?.nickName?.toUpperCase() ?? ''} ${
                      selectedUser?.email ? `(${selectedUser?.email})` : ''
                    }`
                  : ''
              }
            />
          </View>
        </View>
      </View>
    );
  };

  const onSearchUsers = async () => {
    if (!isEmpty(seachKeyword)) {
      setIsSearching(true);

      const params = {
        s: seachKeyword,
        c: coin?.id.toUpperCase(),
      };

      const res = await searchUsers(params);

      setIsSearching(false);
      setIsHideSearchResults(false);

      if (res.status && res.data) {
        setSearchResults(res.data);
      }
    }
  };

  const onSelectedSearchUser = (item) => {
    setIsHideSearchResults(true);
    setSelectedUser(item);
  };

  return (
    <View style={styles.container}>
      <NavTitleBackHeader
        containerStyle={styles.navHeader}
        title={`${t('create_giftcode')} ${coin.name}`}
      />
      <KeyboardAwareScrollView
        style={styles.scrollView}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.contentScrollContainer}>
        <Text style={[styles.title, { marginTop: actuatedNormalize(20) }]}>
          {t('giftcode_type').toUpperCase()}
        </Text>
        <TouchableX
          style={styles.inputContainer}
          onPress={onShowActionSheetType}>
          <View style={styles.leftContainer} pointerEvents="none">
            <TextInput
              style={[styles.input, { color: Colors.GREY }]}
              placeholderTextColor={Colors.GREY}
              editable={false}
              value={giftCodeType ? t(`${giftCodeType.id}`) : ''}
            />
          </View>
          <View style={styles.rightContainer}>
            <FontAwesome5 name={'chevron-down'} color="white" size={15} />
          </View>
        </TouchableX>
        {renderConditionView()}

        <Text style={[styles.title, { marginTop: actuatedNormalize(20) }]}>
          {t('content').toUpperCase()}
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.leftContainer}>
            <TextInput
              style={[styles.input, { color: Colors.GREY }]}
              placeholderTextColor={Colors.GREY}
              onChangeText={(value) => setContent(value)}
              value={content ? content : ''}
            />
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.title}>{t('amount').toUpperCase()}</Text>
          <View style={styles.row}>
            <Text style={styles.transactionText}>{t('you_have')}</Text>
            <Text style={[styles.transactionText, { color: Colors.BLUE }]}>
              {formatCommaNumber(availableCoin.amount)} {coin?.id.toUpperCase()}
            </Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.leftContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor={Colors.GREY}
              keyboardType="decimal-pad"
              value={amount}
              onChangeText={(value) => setAmount(value)}
            />
          </View>
          <View
            style={[styles.rightContainer, { width: actuatedNormalize(105) }]}>
            <Text style={styles.rightButtonTitle}>
              {coin?.id?.toUpperCase()}
            </Text>
          </View>
        </View>

        <Text style={[styles.title, { marginTop: actuatedNormalize(20) }]}>
          {t('quantity').toUpperCase()}
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.leftContainer}>
            <TextInput
              style={[styles.input, { color: Colors.GREY }]}
              placeholderTextColor={Colors.GREY}
              onChangeText={(value) => setQuantity(value)}
              value={quantity ? quantity : ''}
            />
          </View>
        </View>

        <BlueButton
          title={t('create')}
          containerStyle={[styles.continueButton, { marginHorizontal: 0 }]}
          onPress={onCreateGiftCode}
        />
      </KeyboardAwareScrollView>
      <ActionSheet
        ref={actionsSheetTypeRef}
        options={conditionOptions}
        cancelButtonIndex={conditionOptions.length - 1}
        onPress={(index) => {
          if (index !== conditionOptions.length - 1) {
            const value = conditionOptions[index];
            const condition = GIFTCODE_CONDITIONS.find(
              (item) => value === t(`${item.id}`),
            );

            if (condition) {
              setGiftCodeType(condition);
            }
          }
        }}
      />
    </View>
  );
};
