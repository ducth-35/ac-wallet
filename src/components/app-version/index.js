import React from 'react';
import { Text } from 'react-native';

import DeviceInfo from 'react-native-device-info';

import styles from './styles';

export const AppVersionInfo = () => {
  return (
    <Text style={styles.versionText}>
      VNDT Wallet Pro - {DeviceInfo.getVersion()} build{' '}
      {DeviceInfo.getBuildNumber()}
    </Text>
  );
};
