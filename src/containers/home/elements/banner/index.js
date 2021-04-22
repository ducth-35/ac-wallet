import React from 'react';
import { View, Text } from 'react-native';

import { useTranslation } from '@/hooks';

import styles from './styles';

export const Banner = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.bannerText}>Banner</Text>
    </View>
  );
};
