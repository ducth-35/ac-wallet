import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { ToggleSwitch, BlueButton } from '@/components';
import { Colors } from '@/themes';
import { useTranslation } from '@/hooks';
import { Routes } from '@/common';
import { NavigationService } from '@/services';

import styles from './styles';

export const PrivacyScreen = () => {
  const { t } = useTranslation();

  const [agree, setAgree] = useState(false);

  const onChangeToggleValue = (isOn) => {
    setAgree(isOn);
  };

  const onContinue = () => {
    if (agree) {
      NavigationService.navigate(Routes.ONBOARDING);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.bigTitle}>{t('privacy_policy')}</Text>
          <Text style={styles.subTitle}>{t('privacy_text_1')}</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.row}>
            <ToggleSwitch
              isOn={agree}
              size="small"
              onColor={Colors.BLUE}
              offColor={Colors.PRIMARY}
              onToggle={onChangeToggleValue}
            />
            <Text style={styles.agreeText}>{t('privacy_text_2')}</Text>
          </View>
          <BlueButton
            containerStyle={styles.continueBtn}
            title={t('continue')}
            onPress={onContinue}
          />
        </View>
      </View>
    </View>
  );
};
