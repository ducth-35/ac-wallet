import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image } from 'react-native';

import { NavTitleBackHeader, BlueButton, SelectCoins } from '@/components';
import { useTranslation } from '@/hooks';
import { Routes, SUPPORTED_COINS } from '@/common';
import { NavigationService } from '@/services';

import styles from './styles';

export const TransferScreen = () => {
  const { t } = useTranslation();
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    setCoins(
      SUPPORTED_COINS.filter(
        (item) =>
          item.id === 'vndt' ||
          item.id === 'usdf' ||
          item.id === 'cent' ||
          item.id === 'xeng',
      ),
    );
  }, []);

  const onSelectedCoin = (item) => {
    setSelectedCoin(item);
  };

  const onContinue = () => {
    if (selectedCoin) {
      NavigationService.navigate(Routes.TRANSFER_TO, { coin: selectedCoin });
    }
  };

  return (
    <View style={styles.container}>
      <NavTitleBackHeader
        containerStyle={styles.navHeader}
        title={t('transfer')}
      />
      <Text style={styles.headerText}>{t('select_coin_transfer')}</Text>

      <SelectCoins coins={coins} onSelected={onSelectedCoin} />
      <BlueButton
        title={t('continue')}
        containerStyle={styles.withdrawalButton}
        isActive={selectedCoin ? true : false}
        onPress={onContinue}
      />
    </View>
  );
};
