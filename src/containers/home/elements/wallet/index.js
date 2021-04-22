import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image } from 'react-native';

import { isArray, sortBy } from 'lodash';

import { useAppContext, useTranslation } from '@/hooks';
import { SUPPORTED_COINS, HIDEN_NUMBER, Routes } from '@/common';
import { formatCommaNumber } from '@/utils';
import { ToggleSwitch, TouchableX } from '@/components';
import { Colors } from '@/themes';
import { NavigationService } from '@/services';

import styles from './styles';

export const Wallet = () => {
  const { t } = useTranslation();
  const { userWallets, isHidePrice } = useAppContext();

  const [coins, setCoins] = useState(SUPPORTED_COINS);
  const [hidenZeroBalances, setHidenZeroBalances] = useState(false);

  useEffect(() => {
    getTrackingCoins();
  }, [userWallets, hidenZeroBalances]);

  const getTrackingCoins = () => {
    if (userWallets && isArray(userWallets)) {
      let tmpCoins = [];
      SUPPORTED_COINS.forEach((item) => {
        userWallets.forEach((coin) => {
          if (item.id.toUpperCase() === coin.type) {
            const updatedCoin = {
              ...item,
              value: coin.amount,
            };

            if (!hidenZeroBalances) {
              tmpCoins.push(updatedCoin);
            } else {
              if (updatedCoin.value > 0) {
                tmpCoins.push(updatedCoin);
              }
            }
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

  const renderCoinItems = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          {item.icon && (
            <Image
              style={styles.icon}
              source={item.icon}
              resizeMode="contain"
            />
          )}
          <View style={styles.coinInfoContainer}>
            <Text style={styles.coinName}>{item.id.toUpperCase()}</Text>
            <Text style={styles.coinNameSmall}>{item.name}</Text>
          </View>
        </View>
        <View style={styles.coinAmountContainer}>
          <Text style={styles.amount}>
            {isHidePrice ? HIDEN_NUMBER : formatCommaNumber(item.value)}
          </Text>
        </View>

        <View style={styles.line} />
      </View>
    );
  };

  const onShowHistory = () => {
    NavigationService.navigate(Routes.HISTORY);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View
          style={[
            styles.titleContainer,
            { backgroundColor: Colors.DARK, borderRadius: 6, padding: 2 },
          ]}>
          <View style={styles.walletView}>
            <Text style={styles.walletText}>{t('wallet')}</Text>
          </View>
          <TouchableX
            style={[styles.walletView, { backgroundColor: 'transparent' }]}
            onPress={onShowHistory}>
            <Text style={styles.walletText}>{t('history')}</Text>
          </TouchableX>
        </View>
        <View style={[styles.titleContainer, { alignItems: 'center' }]}>
          <Text style={[styles.stockText, { marginRight: 5 }]}>
            {t('hide_zero_balances')}
          </Text>
          <ToggleSwitch
            isOn={hidenZeroBalances}
            size="small"
            onColor={Colors.BLUE}
            offColor={Colors.SECONDARY}
            onToggle={(value) => {
              setHidenZeroBalances(value);
            }}
          />
        </View>
      </View>
      <FlatList
        style={styles.list}
        data={coins}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderCoinItems}
      />
    </View>
  );
};
