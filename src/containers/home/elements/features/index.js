import React from 'react';
import { View, Text, Image } from 'react-native';

import { useTranslation } from '@/hooks';
import { TouchableX } from '@/components';
import { Colors } from '@/themes';

import styles from './styles';

export const Features = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{t('features')}</Text>
        <Text style={styles.transactionsText}>{t('transactions')}</Text>
      </View>
      <View style={styles.contentContainer}>
        <TouchableX style={[styles.itemContainer, { marginRight: 4 }]}>
          <View style={[styles.icon, { backgroundColor: Colors.SKY_BLUE }]} />
          <Text style={styles.itemTitle}>{t('exchange')}</Text>
        </TouchableX>
        <TouchableX
          style={[styles.itemContainer, { marginRight: 4, marginLeft: 4 }]}>
          <View style={[styles.icon, { backgroundColor: Colors.ORANGE }]} />
          <Text style={styles.itemTitle}>{t('staking_daily')}</Text>
        </TouchableX>
        <TouchableX style={[styles.itemContainer, { marginLeft: 4 }]}>
          <View style={[styles.icon, { backgroundColor: Colors.VIOLET }]} />
          <Text style={styles.itemTitle}>{t('partner')}</Text>
        </TouchableX>
      </View>
    </View>
  );
};
