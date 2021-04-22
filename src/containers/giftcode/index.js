import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, RefreshControl } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { isEmpty } from 'lodash';
import dayjs from 'dayjs';
import ActionSheet from 'react-native-actionsheet';
import Clipboard from '@react-native-community/clipboard';
import Modal from 'react-native-modal';
import QRCode from 'react-native-qrcode-svg';

import { NavTitleHeader, TouchableX } from '@/components';
import { useTranslation, useAppContext } from '@/hooks';
import { Colors, actuatedNormalize } from '@/themes';
import { NavigationService } from '@/services';
import {
  SUPPORTED_GIFTCODE_COINS,
  GIFTCODE_STATUS,
  GIFTCODE_CONDITIONS,
  showLoading,
  showSuccessToast,
  Routes,
} from '@/common';
import { multiFilter, formatCommaNumber } from '@/utils';

import styles from './styles';

export const GifcodeManagerScreen = () => {
  const { t } = useTranslation();
  const { giftcodes, getListGiftcode } = useAppContext();

  const [showSearchContainer, setShowSearchContainer] = useState(false);
  const [keywords, setKeywords] = useState(null);
  const [searchCoin, setSearchCoin] = useState(null);
  const [searchType, setSearchType] = useState(null);
  const [listGiftcode, setListGiftcode] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showQrCodePopup, setShowQrCodePopup] = useState(false);
  const [selectedGiftcode, setSelectedGiftcode] = useState(null);
  const actionSheetCoinsRef = useRef(null);
  const actionsSheetTypeRef = useRef(null);

  const supportedCoinOptions = [
    ...SUPPORTED_GIFTCODE_COINS.map(
      (item) => `${item.name} (${item.id.toUpperCase()})`,
    ),
    t('cancel'),
  ];

  const conditionOptions = [
    ...GIFTCODE_CONDITIONS.map((item) => t(`${item.id}`)),
    t('cancel'),
  ];

  useEffect(() => {
    fetchData({ isShowLoading: true });
  }, []);

  useEffect(() => {
    fetchData({ isShowLoading: false });
  }, [isRefreshing]);

  useEffect(() => {
    filterGiftCode();
  }, [giftcodes, keywords, searchType, searchCoin]);

  const fetchData = async ({ isShowLoading }) => {
    if (isShowLoading) {
      showLoading();
    }

    await getListGiftcode();
    setIsRefreshing(false);
  };

  const filterGiftCode = () => {
    let filters = {};

    if (!isEmpty(keywords)) {
      filters[`id`] = (id) => id.includes(keywords);
    }

    if (!isEmpty(searchCoin)) {
      filters[`currency`] = (coin) => {
        return coin === searchCoin.id.toUpperCase();
      };
    }

    if (!isEmpty(searchType)) {
      filters[`conditions`] = (condition) => {
        const parseCondition = JSON.parse(condition);
        const parseConditionValue = JSON.parse(searchType.value);

        if (
          parseCondition &&
          parseConditionValue &&
          parseCondition.type === parseConditionValue.type
        ) {
          return true;
        }
        return false;
      };
    }

    const filtered = multiFilter({ arr: giftcodes, filters: filters });

    filtered.sort((a, b) => b.created - a.created);

    setListGiftcode(filtered);
  };

  const onCreateGiftCode = () => {
    NavigationService.navigate(Routes.CREATE_GIFTCODE_STEP_1);
  };

  const onReceiveGiftCode = () => {
    NavigationService.navigate(Routes.RECEIVE_GIFTCODE);
  };

  const onShowHideSearchContent = () => {
    setShowSearchContainer((prev) => !prev);
  };

  const onShowActionSheetCoins = () => {
    if (actionSheetCoinsRef) {
      actionSheetCoinsRef.current.show();
    }
  };

  const onShowActionSheetType = () => {
    if (actionsSheetTypeRef) {
      actionsSheetTypeRef.current.show();
    }
  };

  const onResetAll = () => {
    setKeywords(null);
    setSearchType(null);
    setSearchCoin(null);
  };

  const renderSearchContainer = () => {
    return (
      <View style={styles.searchContainer}>
        <TouchableX
          style={styles.searchTitle}
          onPress={onShowHideSearchContent}>
          <Text style={[styles.title, { fontSize: actuatedNormalize(18) }]}>
            {t('search_giftcode')}
          </Text>
          <View style={styles.expandButton}>
            <FontAwesome5
              name={showSearchContainer ? 'chevron-up' : 'chevron-down'}
              color="white"
              size={15}
            />
          </View>
        </TouchableX>

        {showSearchContainer && (
          <>
            <Text style={[styles.title, { marginTop: actuatedNormalize(20) }]}>
              {t('keywords').toUpperCase()}
            </Text>
            <View style={styles.inputContainer}>
              <View style={styles.leftContainer}>
                <TextInput
                  style={[styles.input, { color: Colors.GREY }]}
                  placeholderTextColor={Colors.GREY}
                  onChangeText={(value) => setKeywords(value)}
                  value={keywords ? keywords : ''}
                />
              </View>
            </View>
            <Text style={[styles.title, { marginTop: actuatedNormalize(20) }]}>
              {t('coins').toUpperCase()}
            </Text>
            <TouchableX
              style={styles.inputContainer}
              onPress={onShowActionSheetCoins}>
              <View style={styles.leftContainer} pointerEvents="none">
                <TextInput
                  style={[styles.input, { color: Colors.GREY }]}
                  placeholderTextColor={Colors.GREY}
                  editable={false}
                  placeholder={t('all')}
                  value={
                    searchCoin
                      ? `${searchCoin.name} (${searchCoin.id.toUpperCase()})`
                      : ''
                  }
                />
              </View>
              <View style={styles.rightContainer}>
                <FontAwesome5 name={'chevron-down'} color="white" size={15} />
              </View>
            </TouchableX>
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
                  placeholder={t('all')}
                  value={searchType ? t(`${searchType.id}`) : ''}
                />
              </View>
              <View style={styles.rightContainer}>
                <FontAwesome5 name={'chevron-down'} color="white" size={15} />
              </View>
            </TouchableX>
            <View style={styles.bottomButtons}>
              <TouchableX
                style={[styles.button, { backgroundColor: Colors.RED }]}
                onPress={onResetAll}>
                <Text style={[styles.title, { fontWeight: 'bold' }]}>
                  {t('reset_all').toUpperCase()}
                </Text>
              </TouchableX>
            </View>
          </>
        )}
      </View>
    );
  };

  const onCopyGiftcode = (code) => {
    if (!isEmpty(code)) {
      Clipboard.setString(code);
      showSuccessToast(t('copy_success'));
    }
  };

  const onClosePopup = () => {
    setShowQrCodePopup(false);
  };

  const renderGiftcodeItem = ({ item, index }) => {
    const { id, created, conditions, quantity, currency, status } = item;

    const type = GIFTCODE_CONDITIONS.find((item) => {
      const parseCondition = JSON.parse(conditions);
      const parseConditionValue = JSON.parse(item.value);

      if (
        parseCondition &&
        parseConditionValue &&
        parseCondition.type === parseConditionValue.type
      ) {
        return true;
      }
      return false;
    });

    const statusFilter = GIFTCODE_STATUS.find((item) => item.value === status);

    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemLeftContainer}>
          <View style={styles.row}>
            <Text style={[styles.title, { fontWeight: 'bold' }]}>
              {`${t('code')}:`}
            </Text>
            <TouchableX onPress={() => onCopyGiftcode(id)}>
              <Text
                style={[
                  styles.title,
                  {
                    marginLeft: 10,
                    color: Colors.BLUE,
                    textDecorationLine: 'underline',
                    fontSize: actuatedNormalize(15),
                  },
                ]}>
                {id}
              </Text>
            </TouchableX>
          </View>
          <View style={styles.row}>
            <Text style={[styles.title, { fontWeight: 'bold' }]}>
              {`${t('date')}:`}
            </Text>
            <Text style={[styles.title, { marginLeft: 10 }]}>
              {dayjs(created).format('HH:mm DD-MM-YYYY')}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.title, { fontWeight: 'bold' }]}>
              {`${t('giftcode_type')}:`}
            </Text>
            <Text style={[styles.title, { marginLeft: 10 }]}>
              {type ? t(`${type.id}`) : ''}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.title, { fontWeight: 'bold' }]}>
              {`${t('quantity')}:`}
            </Text>
            <Text
              style={[styles.title, { marginLeft: 10 }]}>{`${formatCommaNumber(
              quantity,
            )} ${currency}`}</Text>
          </View>
          <View style={[styles.row, { marginTop: actuatedNormalize(10) }]}>
            <Text style={[styles.title, { fontWeight: 'bold' }]}>
              {`${t('status')}:`}
            </Text>
            <View
              style={[
                styles.statusView,
                { backgroundColor: statusFilter ? statusFilter.color : 'grey' },
              ]}>
              <Text style={[styles.title, { fontWeight: 'bold' }]}>{`${
                statusFilter ? t(`${statusFilter.id}`) : ''
              }`}</Text>
            </View>
          </View>
        </View>
        <TouchableX
          style={styles.rightButton}
          onPress={() => {
            setSelectedGiftcode(item);
            setShowQrCodePopup(true);
          }}>
          <FontAwesome5
            name="qrcode"
            color="white"
            size={20}
            style={styles.infoIcon}
          />
        </TouchableX>
      </View>
    );
  };

  const onRefresh = () => {
    setIsRefreshing(true);
  };

  return (
    <View style={styles.container}>
      <NavTitleHeader
        title={t('manager_giftcode')}
        containerStyle={styles.navHeader}
        rightContainer={
          <TouchableX style={styles.navRightButton} onPress={onCreateGiftCode}>
            <FontAwesome5 name="plus-circle" color="white" size={20} />
          </TouchableX>
        }
        leftContainer={
          <TouchableX style={styles.navLeftButton} onPress={onReceiveGiftCode}>
            <FontAwesome5 name="gift" color="white" size={20} />
          </TouchableX>
        }
      />
      <View style={styles.contentContainer}>
        <KeyboardAwareFlatList
          style={styles.scrollView}
          contentContainerStyle={styles.contentScrollContainer}
          ListHeaderComponent={renderSearchContainer()}
          data={listGiftcode}
          renderItem={renderGiftcodeItem}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={onRefresh}
              tintColor="white"
            />
          }
          keyExtractor={(item, index) => `${item.id}-${index}`}
        />
      </View>
      <ActionSheet
        ref={actionSheetCoinsRef}
        options={supportedCoinOptions}
        cancelButtonIndex={supportedCoinOptions.length - 1}
        onPress={(index) => {
          if (index !== supportedCoinOptions.length - 1) {
            const value = supportedCoinOptions[index];
            const coin = SUPPORTED_GIFTCODE_COINS.find(
              (item) => value === `${item.name} (${item.id.toUpperCase()})`,
            );

            if (coin) {
              setSearchCoin(coin);
            }
          }
        }}
      />

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
              setSearchType(condition);
            }
          }
        }}
      />
      {selectedGiftcode && (
        <Modal
          isVisible={showQrCodePopup}
          onRequestClose={onClosePopup}
          onBackdropPress={onClosePopup}>
          <View style={styles.qrCodeContainer}>
            <View style={styles.row}>
              <Text
                style={[
                  styles.title,
                  { fontWeight: 'bold', color: Colors.GREY },
                ]}>
                {`${t('code')}:`}
              </Text>
              <TouchableX onPress={() => onCopyGiftcode(selectedGiftcode.id)}>
                <Text
                  style={[
                    styles.title,
                    {
                      marginLeft: 10,
                      color: Colors.BLUE,
                      textDecorationLine: 'underline',
                      fontSize: actuatedNormalize(15),
                    },
                  ]}>
                  {selectedGiftcode.id}
                </Text>
              </TouchableX>
            </View>
            <View style={[styles.row, { marginBottom: actuatedNormalize(20) }]}>
              <Text
                style={[
                  styles.title,
                  { fontWeight: 'bold', color: Colors.GREY },
                ]}>
                {`${t('quantity')}:`}
              </Text>
              <Text
                style={[
                  styles.title,
                  { marginLeft: 10, color: Colors.GREY },
                ]}>{`${formatCommaNumber(selectedGiftcode?.quantity)} ${
                selectedGiftcode?.currency
              }`}</Text>
            </View>
            <QRCode size={actuatedNormalize(200)} value={selectedGiftcode.id} />
          </View>
        </Modal>
      )}
    </View>
  );
};
