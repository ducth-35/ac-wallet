import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, RefreshControl } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { isEmpty } from 'lodash';
import dayjs from 'dayjs';
import ActionSheet from 'react-native-actionsheet';
import Clipboard from '@react-native-community/clipboard';

import { TouchableX } from '@/components';
import { useTranslation, useAppContext } from '@/hooks';
import { Colors, actuatedNormalize } from '@/themes';
import {
  showLoading,
  showSuccessToast,
  SUPPORTED_COINS,
  GIFTCODE_STATUS,
  TRANSACTION_TYPE,
} from '@/common';
import { multiFilter, formatCommaNumber } from '@/utils';

import styles from './styles';

export const TransactionHistory = () => {
  const { t } = useTranslation();
  const { transactionHistory, getTransactionHistory } = useAppContext();

  const [showSearchContainer, setShowSearchContainer] = useState(false);
  const [keywords, setKeywords] = useState(null);
  const [searchCoin, setSearchCoin] = useState(null);
  const [searchType, setSearchType] = useState(null);
  const [listHistory, setListHistory] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const actionSheetCoinsRef = useRef(null);
  const actionSheetTypeRef = useRef(null);

  const supportedCoinOptions = [
    ...SUPPORTED_COINS.filter((item) =>
      ['btc', 'eth', 'usdt', 'xrp', 'xlm', 'trx'].includes(item.id),
    ).map((item) => `${item.name} (${item.id.toUpperCase()})`),
    t('cancel'),
  ];

  const transactionTypeOptions = [
    ...TRANSACTION_TYPE.map((item) => t(`${item.id}`)),
    t('cancel'),
  ];

  useEffect(() => {
    fetchData({ isShowLoading: false });
  }, []);

  useEffect(() => {
    fetchData({ isShowLoading: false });
  }, [isRefreshing]);

  useEffect(() => {
    filterHistory();
  }, [transactionHistory, keywords, searchCoin, searchType]);

  const fetchData = async ({ isShowLoading }) => {
    if (isShowLoading) {
      showLoading();
    }

    const params = { c: 'all', t: 'depowith', l: 1000 };

    await getTransactionHistory(params);
    setIsRefreshing(false);
  };

  const filterHistory = () => {
    let filters = {};

    if (!isEmpty(keywords)) {
      filters[`id`] = (id) => id.includes(keywords);
    }

    if (!isEmpty(searchCoin)) {
      filters[`currencyCode`] = (currencyCode) => {
        return currencyCode === searchCoin.currencyCode;
      };
    }

    if (!isEmpty(searchType)) {
      filters[`transactionType`] = (transactionType) => {
        return transactionType === searchType.value;
      };
    }

    const filtered = multiFilter({ arr: transactionHistory, filters: filters });

    filtered.sort((a, b) => b.created - a.created);

    setListHistory(filtered);
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
    if (actionSheetTypeRef) {
      actionSheetTypeRef.current.show();
    }
  };

  const onResetAll = () => {
    setKeywords(null);
    setSearchCoin(null);
    setSearchType(null);
  };

  const renderSearchContainer = () => {
    return (
      <View style={styles.searchContainer}>
        <TouchableX
          style={styles.searchTitle}
          onPress={onShowHideSearchContent}>
          <Text style={[styles.title, { fontSize: actuatedNormalize(18) }]}>
            {t('search_transaction')}
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
              {t('transaction_type').toUpperCase()}
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

  const onCopyHashReceive = (code) => {
    if (!isEmpty(code)) {
      Clipboard.setString(code);
      showSuccessToast(t('copy_success'));
    }
  };

  const getTransactionType = ({ type }) => {
    const findItem = TRANSACTION_TYPE.find((item) => item.value === type);
    if (findItem) {
      return t(`${findItem.id}`);
    }

    return '';
  };

  const renderHistoryItem = ({ item, index }) => {
    const {
      id,
      createdDate,
      transactionType,
      quantity,
      currencyCode,
      status,
      rate,
      fee,
      additionInfo,
      hash,
      transactionContent,
    } = item;

    const selectedCoin = SUPPORTED_COINS.find(
      (item) => item.currencyCode === currencyCode,
    );

    const statusFilter = GIFTCODE_STATUS.find((item) => item.value === status);

    return (
      <TouchableX
        style={styles.itemContainer}
        onPress={() => onCopyHashReceive(hash)}>
        <View style={styles.itemLeftContainer}>
          <View style={styles.row}>
            <Text style={[styles.title, { fontWeight: 'bold' }]}>{`ID:`}</Text>
            <Text
              style={[
                styles.title,
                {
                  marginLeft: 10,
                  color: Colors.BLUE,
                  fontSize: actuatedNormalize(15),
                },
              ]}>
              {id}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.title, { fontWeight: 'bold' }]}>{`${t(
              'from',
            )}:`}</Text>
            <Text style={[styles.title, { marginLeft: 10, flex: 1 }]}>
              {additionInfo?.addressSendPayment}
            </Text>
          </View>

          <View style={styles.row}>
            <Text
              style={[styles.title, { fontWeight: 'bold' }]}>{`TxID:`}</Text>
            <Text style={[styles.title, { marginLeft: 10, flex: 1 }]}>
              {hash}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.title, { fontWeight: 'bold' }]}>{`${t(
              'exchange',
            )}:`}</Text>
            <Text style={[styles.title, { marginLeft: 10, flex: 1 }]}>
              {getTransactionType({ type: transactionType })}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.title, { fontWeight: 'bold' }]}>
              {`${t('date')}:`}
            </Text>
            <Text style={[styles.title, { marginLeft: 10 }]}>
              {dayjs(createdDate).format('HH:mm DD-MM-YYYY')}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.title, { fontWeight: 'bold' }]}>
              {`${t('quantity')}:`}
            </Text>
            <Text
              style={[
                styles.title,
                { marginLeft: 10, fontWeight: 'bold' },
              ]}>{`${formatCommaNumber(
              quantity,
            )} ${selectedCoin?.id.toUpperCase()}`}</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.title, { fontWeight: 'bold' }]}>
              {`${t('rate')}:`}
            </Text>
            <Text
              style={[
                styles.title,
                { marginLeft: 10, fontWeight: 'bold' },
              ]}>{`${formatCommaNumber(
              rate,
            )} ${selectedCoin?.id.toUpperCase()}`}</Text>
          </View>

          <View style={styles.row}>
            <Text style={[styles.title, { fontWeight: 'bold' }]}>
              {`${t('fee')}:`}
            </Text>
            <Text
              style={[
                styles.title,
                { marginLeft: 10, fontWeight: 'bold' },
              ]}>{`${formatCommaNumber(
              fee,
            )} ${selectedCoin?.id.toUpperCase()}`}</Text>
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

          <View style={[styles.row, { marginTop: actuatedNormalize(10) }]}>
            <Text style={[styles.title, { fontWeight: 'bold' }]}>{`${t(
              'content',
            )}:`}</Text>
            <Text style={[styles.title, { marginLeft: 10, flex: 1 }]}>
              {transactionContent}
            </Text>
          </View>
        </View>
      </TouchableX>
    );
  };

  const onRefresh = () => {
    setIsRefreshing(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <KeyboardAwareFlatList
          style={styles.scrollView}
          contentContainerStyle={styles.contentScrollContainer}
          ListHeaderComponent={renderSearchContainer()}
          data={listHistory}
          renderItem={renderHistoryItem}
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
            const coin = SUPPORTED_COINS.find(
              (item) => value === `${item.name} (${item.id.toUpperCase()})`,
            );

            if (coin) {
              setSearchCoin(coin);
            }
          }
        }}
      />

      <ActionSheet
        ref={actionSheetTypeRef}
        options={transactionTypeOptions}
        cancelButtonIndex={transactionTypeOptions.length - 1}
        onPress={(index) => {
          if (index !== transactionTypeOptions.length - 1) {
            const value = transactionTypeOptions[index];
            const condition = TRANSACTION_TYPE.find(
              (item) => value === t(`${item.id}`),
            );

            if (condition) {
              setSearchType(condition);
            }
          }
        }}
      />
    </View>
  );
};
