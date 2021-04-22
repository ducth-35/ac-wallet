import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ActivityIndicator } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { isEmpty } from 'lodash';

import {
  NavTitleBackHeader,
  BlueButton,
  AutoSuggest,
  TouchableX,
} from '@/components';
import { useAppContext, useTranslation, useDebounce } from '@/hooks';
import { Colors, actuatedNormalize } from '@/themes';
import { showLoading, showErrorToast, showSuccessToast } from '@/common';
import { formatCommaNumber } from '@/utils';

import styles from './styles';

export const TransferToScreen = ({ route }) => {
  const { t } = useTranslation();
  const {
    searchUsers,
    getTransactionCoinFee,
    withdrawMoney,
    getUserWallets,
    coinFee,
    userWallets,
  } = useAppContext();

  const [seachKeyword, setSearchKeyword] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isHideSearchResults, setIsHideSearchResults] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [availableCoin, setAvailableCoin] = useState(0);
  const [fee, setFee] = useState(0);
  const [networkFee, setNetworkFee] = useState('');
  const [quantity, setQuantity] = useState('');

  const debouncedSearchKeyword = useDebounce(seachKeyword, 500);
  const coin = route.params?.coin;
  const receveAddress = route.params?.receveAddress;

  useEffect(() => {
    getTransactionCoinFee();
    getAvailableCoin();
  }, []);

  useEffect(() => {
    if (!isEmpty(receveAddress)) {
      setSelectedUser({ address: receveAddress });
    }
  }, [receveAddress]);

  useEffect(() => {
    if (coinFee) {
      let fee = 0;

      if (coinFee) {
        fee = coinFee[`${coin?.id}_fee`];
      }

      setFee(fee);
      setNetworkFee(`${fee} ${coin.networkFee.toUpperCase()}`);
    }
  }, [coinFee]);

  useEffect(() => {
    if (debouncedSearchKeyword) {
      onSearchUsers();
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchKeyword]);

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

  const onSetAllAvailableCoin = () => {
    setQuantity(availableCoin.amount);
  };

  const onWithdraw = async () => {
    let errorMessage = null;

    if (isEmpty(quantity)) {
      errorMessage = t('invalid_quantity');
    } else if (isEmpty(selectedUser)) {
      errorMessage = t('invalid_address');
    }

    if (errorMessage) {
      showErrorToast(errorMessage);
      return;
    }

    const params = {
      fee: fee,
      currencyCode: coin.currencyCode,
      quantity: quantity,
      address: selectedUser?.address,
    };

    showLoading();

    const res = await withdrawMoney(params);

    if (res.status) {
      showSuccessToast(t('withdraw_success'));
      getUserWallets();
    }
  };

  return (
    <View style={styles.container}>
      <NavTitleBackHeader
        containerStyle={styles.navHeader}
        title={`${t('transfer')} ${coin?.id?.toUpperCase()}`}
      />
      <View style={styles.searchContainer}>
        <Text style={styles.title}>{t('seach_recipients').toUpperCase()}</Text>
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
      <KeyboardAwareScrollView
        style={styles.scrollView}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.contentScrollContainer}>
        <Text style={styles.title}>{t('recipient').toUpperCase()}</Text>
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

        <Text style={styles.title}>{t('receiving_address').toUpperCase()}</Text>
        <View
          style={[
            styles.inputContainer,
            { backgroundColor: Colors.DARK_GREY },
          ]}>
          <View style={styles.leftContainer}>
            <TextInput
              style={[styles.input, { color: Colors.GREY }]}
              editable={false}
              value={selectedUser ? selectedUser.address : ''}
              multiline={true}
            />
          </View>
        </View>

        <View style={styles.transactionContainer}>
          <Text style={styles.title}>{t('quantity').toUpperCase()}</Text>
          <TouchableX
            style={styles.transactionContainer}
            onPress={onSetAllAvailableCoin}>
            <Text style={styles.transactionText}>{t('you_have')}</Text>
            <Text style={[styles.transactionText, { color: Colors.BLUE }]}>
              {formatCommaNumber(availableCoin.amount)} {coin?.id.toUpperCase()}
            </Text>
          </TouchableX>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.leftContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor={Colors.GREY}
              keyboardType="decimal-pad"
              value={quantity}
              onChangeText={(value) => setQuantity(value)}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.rightButtonTitle}>
              {coin?.id?.toUpperCase()}
            </Text>
          </View>
        </View>

        <Text style={styles.title}>{t('network_fee').toUpperCase()}</Text>
        <View style={styles.inputContainer}>
          <View style={styles.leftContainer}>
            <TextInput
              style={[styles.input, { color: Colors.GREY }]}
              value={'Medium'}
              editable={false}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.rightButtonTitle}>{networkFee}</Text>
          </View>
        </View>
        <BlueButton
          title={t('transfer_now')}
          containerStyle={styles.transferButton}
          onPress={onWithdraw}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};
