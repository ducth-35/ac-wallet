import React from 'react';
import { ImageBackground, Image, Text } from 'react-native';

import { BG_SPLASH, ICO_SPLASH_LOGO } from '@/common';

import styles from './styles';

export const SplashScreen = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={BG_SPLASH}
      resizeMode="cover">
      <Image
        style={styles.logo}
        source={ICO_SPLASH_LOGO}
        resizeMode="contain"
      />
      <Text style={styles.copyRight}>Copyright @2020 VNDT.io</Text>
    </ImageBackground>
  );
};
