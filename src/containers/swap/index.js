import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { NavTitleBackHeader, SelectCoins, BlueButton } from '@/components';
import { useTranslation } from '@/hooks';
import { SUPPORTED_COINS, Routes, SWAP_TYPE } from '@/common';
import { Colors } from '@/themes';
import { NavigationService } from '@/services';

import styles from './styles';

export const SwapScreen = () => {
  const { t } = useTranslation();

  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(() => {
    setCoins(SUPPORTED_COINS.filter((item) => item.id !== 'vndt'));
  }, []);

  const onSelectedCoin = (item) => {
    setSelectedCoin(item);
  };

  const onSell = () => {
    if (selectedCoin) {
      NavigationService.navigate(Routes.SWAP_TO, {
        coin: selectedCoin,
        type: SWAP_TYPE.SELL,
      });
    }
  };

  const onBuy = () => {
    if (selectedCoin) {
      NavigationService.navigate(Routes.SWAP_TO, {
        coin: selectedCoin,
        type: SWAP_TYPE.BUY,
      });
    }
  };

  return (
    <View style={styles.container}>
      <NavTitleBackHeader containerStyle={styles.navHeader} title={t('swap')} />
      <Text style={styles.headerText}>{t('select_coin_swap')}</Text>
      <SelectCoins coins={coins} onSelected={onSelectedCoin} />
      <View style={styles.row}>
        <BlueButton
          title={t('sell')}
          containerStyle={[styles.buyButton, { marginRight: 5 }]}
          isActive={selectedCoin ? true : false}
          onPress={onSell}
          activeBackgroundColor={Colors.RED}
        />

        <BlueButton
          title={t('buy')}
          containerStyle={[styles.buyButton, { marginLeft: 5 }]}
          isActive={selectedCoin ? true : false}
          onPress={onBuy}
        />
      </View>
    </View>
  );
};
