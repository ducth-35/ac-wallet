import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image } from 'react-native';

import { NavTitleBackHeader, BlueButton, SelectCoins } from '@/components';
import { useTranslation } from '@/hooks';
import { Routes, SUPPORTED_COINS } from '@/common';
import { NavigationService } from '@/services';

import styles from './styles';

export const DepositScreen = () => {
  const { t } = useTranslation();
  const [selectedCoin, setSelectedCoin] = useState(null);

  const onSelectedCoin = (item) => {
    setSelectedCoin(item);
  };

  const onContinue = () => {
    if (selectedCoin) {
      if (selectedCoin.id === 'vndt') {
        NavigationService.navigate(Routes.DEPOSIT_VNDT);
      } else {
        NavigationService.navigate(Routes.DEPOSIT_CRYTO, {
          coinName: selectedCoin.name,
          coinId: selectedCoin.id,
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <NavTitleBackHeader
        containerStyle={styles.navHeader}
        title={t('tab_deposit')}
      />
      <Text style={styles.headerText}>{t('select_coin_deposit')}</Text>

      <SelectCoins coins={SUPPORTED_COINS} onSelected={onSelectedCoin} />
      <BlueButton
        title={t('continue')}
        containerStyle={styles.withdrawalButton}
        isActive={selectedCoin ? true : false}
        onPress={onContinue}
      />
    </View>
  );
};
