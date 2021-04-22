import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { useTranslation, useAppContext } from '@/hooks';
import { getWalletAddress } from '@/utils';

import { WalletAddressItem } from '../address-item';
import styles from './styles';

export const MyAccounts = ({ selectedCoin }) => {
  const { t } = useTranslation();
  const { userWallets } = useAppContext();

  const [coin, setCoin] = useState(null);

  useEffect(() => {
    if (selectedCoin) {
      const existingCoin = userWallets.find(
        (wallet) => wallet.type === selectedCoin.toUpperCase(),
      );

      if (existingCoin) {
        setCoin(existingCoin);
      }
    }
  }, [selectedCoin]);

  return (
    <View style={styles.container}>
      <WalletAddressItem
        title={t('main_account')}
        subTitle={`${coin ? coin.type : ''} ${t('address')}`}
        address={coin ? getWalletAddress(coin.walletAddress) : ''}
      />
    </View>
  );
};
