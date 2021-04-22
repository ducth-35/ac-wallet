import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { NavTitleBackHeader, BlueButton, RounerInput } from '@/components';
import { useTranslation, useAppContext } from '@/hooks';
import { validatePassword } from '@/utils';

import { showLoading, showErrorToast, showSuccessToast } from '@/common';

import styles from './styles';

export const ChangePasswordScreen = () => {
  const { t } = useTranslation();
  const { changePassword, forceLogout } = useAppContext();

  const [password, setPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const onChangePassword = async () => {
    let errorMessage = null;
    if (!validatePassword(password)) {
      errorMessage = t('invalid_password');
    } else if (!validatePassword(newPassword)) {
      errorMessage = t('new_password_invalid');
    } else if (newPassword !== confirmPassword) {
      errorMessage = t('confirm_password_invalid');
    }

    if (errorMessage) {
      showErrorToast(errorMessage);
      return;
    }

    showLoading();
    const params = { old_pass: password, new_pass: newPassword };

    const res = await changePassword(params);

    if (res.status) {
      showSuccessToast(t('message_change_password_success'));
      forceLogout();
    }
  };

  return (
    <View style={styles.container}>
      <NavTitleBackHeader
        containerStyle={styles.navHeader}
        title={t('change_password')}
      />
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.contentScrollContainer}>
          <RounerInput
            containerStyle={styles.inputContainer}
            title={t('password').toUpperCase()}
            placeholder={t('password')}
            onChangeText={(value) => setPassword(value)}
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <RounerInput
            containerStyle={styles.inputContainer}
            title={t('new_password').toUpperCase()}
            placeholder={t('new_password')}
            onChangeText={(value) => setNewPassword(value)}
            autoCapitalize="none"
            secureTextEntry={true}
          />
          <RounerInput
            containerStyle={styles.inputContainer}
            title={t('confirm_password').toUpperCase()}
            placeholder={t('confirm_password')}
            onChangeText={(value) => setConfirmPassword(value)}
            autoCapitalize="none"
            secureTextEntry={true}
          />

          <BlueButton
            containerStyle={styles.confirmPasswordBtn}
            title={t('confirm')}
            onPress={onChangePassword}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
