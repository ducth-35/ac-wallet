import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

import { isArray, sortBy } from 'lodash';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { useAppContext, useTranslation } from '@/hooks';
import { SUPPORTED_COINS, HIDEN_NUMBER } from '@/common';
import { formatCommaNumber } from '@/utils';

import styles from './styles';

export const EquityValue = () => {
  const { t } = useTranslation();
  const {
    coinRates,
    userWallets,
    updateHidePrice,
    isHidePrice,
  } = useAppContext();

  const [amount, setAmount] = useState(0);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getTrackingCoins();
  }, [coinRates]);

  useEffect(() => {
    setAmount(getBalanceUSDT());
  }, [userWallets]);

  const getTrackingCoins = () => {
    if (coinRates) {
      const { rates } = coinRates;
      let tmpCoins = [];
      SUPPORTED_COINS.forEach((item) => {
        Object.keys(rates).forEach((key) => {
          if (item.id !== 'vndt' && key === `ask_${item.id}`) {
            tmpCoins.push({ ...item, value: rates[key] });
          }
        });
      });

      const sortedCoins = sortBy(tmpCoins, [
        (o) => {
          return o.order;
        },
      ]);

      setCoins(sortedCoins);
    }
  };

  const getBalanceUSDT = () => {
    if (userWallets && isArray(userWallets)) {
      const usdtWallet = userWallets.find((item) => item.type === 'VNDT');

      if (usdtWallet) {
        return usdtWallet.amount;
      }
    }

    return 0;
  };

  const renderCoinItems = ({ item, index }) => {
    return (
      <View style={[styles.row, { marginRight: 20 }]}>
        <Text style={styles.coinName}>{`${item.id.toUpperCase()}/VNDT:`}</Text>
        <Text style={styles.coinValue}>{formatCommaNumber(item.value)}</Text>
      </View>
    );
  };

  const onUpdateShowHidePrice = () => {
    updateHidePrice(!isHidePrice);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>{t('equity_value')}</Text>
        <TouchableOpacity onPress={onUpdateShowHidePrice}>
          <FontAwesome5
            name={isHidePrice ? 'eye' : 'eye-slash'}
            style={styles.iconEye}
            size={15}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.row, { alignItems: 'baseline' }]}>
        <Text style={styles.balance}>
          {isHidePrice ? HIDEN_NUMBER : formatCommaNumber(amount)}
        </Text>
        <Text style={styles.currency}>VNDT</Text>
      </View>
      {/* <FlatList
        style={styles.list}
        horizontal={true}
        data={coins}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderCoinItems}
        showsHorizontalScrollIndicator={false}
      /> */}
    </View>
  );
};
