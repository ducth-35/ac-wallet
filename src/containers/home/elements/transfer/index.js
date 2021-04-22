import React from 'react';
import { View, Text, Image } from 'react-native';

import { useTranslation } from '@/hooks';
import { TouchableX } from '@/components';
import { ICO_SWAP, ICO_TRANSFER, Routes } from '@/common';
import { NavigationService } from '@/services';
import { actuatedNormalize } from '@/themes';

import styles from './styles';

export const Transfer = () => {
  const { t } = useTranslation();

  const onNavigateToSwapScreen = () => {
    NavigationService.navigate(Routes.SWAP);
  };

  const onNavigateToTransferScreen = () => {
    NavigationService.navigate(Routes.TRANSFER);
  };

  const onNavigateToForexScreen = () => {
    NavigationService.navigate(Routes.TRANSFER_FOREX);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>{t('transfer')}</Text> */}
      <View style={styles.contentContainer}>
        <TouchableX
          style={[styles.itemContainer, { marginRight: actuatedNormalize(5) }]}
          onPress={onNavigateToSwapScreen}>
          {/* <Image style={styles.icon} source={ICO_SWAP} /> */}
          <Text style={styles.itemTitle}>{t('swap')}</Text>
        </TouchableX>
        <TouchableX
          style={[styles.itemContainer, { marginLeft: actuatedNormalize(5) }]}
          onPress={onNavigateToTransferScreen}>
          {/* <Image style={styles.icon} source={ICO_TRANSFER} /> */}
          <Text style={styles.itemTitle}>{t('transfer')}</Text>
        </TouchableX>
        {/* <TouchableX
          style={[styles.itemContainer, { marginLeft: 4 }]}
          onPress={onNavigateToForexScreen}>
          <Image style={styles.icon} source={ICO_FOREX} />
          <Text style={styles.itemTitle}>{t('forex')}</Text>
        </TouchableX> */}
      </View>
    </View>
  );
};
