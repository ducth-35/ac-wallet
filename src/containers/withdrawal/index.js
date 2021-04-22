import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { NavTitleBackHeader, BlueButton, SelectCoins } from '@/components';
import { useTranslation } from '@/hooks';
import { Routes, SUPPORTED_COINS } from '@/common';
import { NavigationService } from '@/services';

import styles from './styles';

export const WithdrawalScreen = () => {
  const { t } = useTranslation();

  const [selectedCoin, setSelectedCoin] = useState(null);

  const onSelectedCoin = (item) => {
    setSelectedCoin(item);
  };

  const onContinue = () => {
    if (selectedCoin) {
      NavigationService.navigate(Routes.WITHDRAW_COIN, {
        coinName: selectedCoin.name,
        coinId: selectedCoin.id,
      });
    }
  };

  return (
    <View style={styles.container}>
      <NavTitleBackHeader
        containerStyle={styles.navHeader}
        title={t('tab_withdrawal')}
      />
      <Text style={styles.headerText}>{t('select_coin_withdraw')}</Text>
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
