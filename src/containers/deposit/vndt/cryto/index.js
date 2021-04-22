import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import Clipboard from '@react-native-community/clipboard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { isEmpty } from 'lodash';
import QRCode from 'react-native-qrcode-svg';

import { useTranslation, useAppContext } from '@/hooks';
import { actuatedNormalize } from '@/themes';
import { TouchableX, NavTitleBackHeader, Note } from '@/components';
import { showSuccessToast } from '@/common';
import { getWalletAddress } from '@/utils';

import styles from './styles';

export const DepositCrytoScreen = ({ route }) => {
  const { t } = useTranslation();
  const { userWallets } = useAppContext();

  const [coinWallet, setCoinWallet] = useState('');

  const coinId = route.params?.coinId;

  useEffect(() => {
    getCoinWallet();
  }, []);

  const getCoinWallet = () => {
    if (!isEmpty(userWallets) && userWallets.length > 0 && !isEmpty(coinId)) {
      const coin = userWallets.find(
        (item) => item.type.toLowerCase() === coinId,
      );

      if (coin) {
        const walletAddress = coin.walletAddress;
        setCoinWallet(getWalletAddress(walletAddress));
      }
    }
  };

  const onCopyToClipboard = () => {
    if (!isEmpty(coinWallet)) {
      Clipboard.setString(coinWallet);
      showSuccessToast(t('copy_success'));
    }
  };

  const renderNote = () => {
    return <Note coinId={coinId} />;
  };

  const renderNavHeader = () => {
    if (coinId === 'vndt') {
      return null;
    }

    return (
      <NavTitleBackHeader
        containerStyle={styles.navHeader}
        title={`${t('tab_deposit')} ${coinId.toUpperCase()}`}
      />
    );
  };

  return (
    <View style={styles.container}>
      {renderNavHeader()}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {!isEmpty(coinWallet) && (
          <View style={styles.qrCodeContainer}>
            <QRCode size={actuatedNormalize(200)} value={coinWallet} />
          </View>
        )}

        <View style={styles.inputContainer}>
          <View style={styles.leftContainer}>
            <Text style={styles.input}>{coinWallet}</Text>
          </View>
          <TouchableX style={styles.rightContainer} onPress={onCopyToClipboard}>
            <FontAwesome
              name="copy"
              color="white"
              size={actuatedNormalize(20)}
            />
            <Text style={styles.rightButtonTitle}>{t('copy')}</Text>
          </TouchableX>
        </View>
        {renderNote()}
      </ScrollView>
    </View>
  );
};
