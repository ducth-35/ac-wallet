import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { isEmpty } from 'lodash';

import {
  NavTitleBackHeader,
  BlueButton,
  IconInput,
  TouchableX,
  AppVersionInfo,
} from '@/components';
import { useTranslation, useAppContext } from '@/hooks';
import {
  ICO_INPUT_NAME,
  ICO_INPUT_PASSWORD,
  ICO_INPUT_EMAIL,
  ICO_SPONSOR,
  GOOGLE_RECAPTRA,
  showErrorToast,
  showLoading,
  showSuccessToast,
} from '@/common';
import { validateEmail, validatePassword, validateName } from '@/utils';
import { ConfirmGoogleCaptcha, NavigationService } from '@/services';

import styles from './styles';

export const SignUpScreen = () => {
  const { t, localeProvider } = useTranslation();
  const { register } = useAppContext();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [sponsorId, setSponsorId] = useState(null);
  const [showRecaptra, setShowRecaptra] = useState(false);

  const onSignUp = () => {
    let errorMessage = null;
    if (!validateName(name.trim())) {
      errorMessage = t('invalid_name');
    } else if (!validateEmail(email.trim())) {
      errorMessage = t('invalid_email');
    } else if (!validatePassword(password.trim())) {
      errorMessage = t('invalid_password');
    }

    if (errorMessage) {
      showErrorToast(errorMessage);
      return;
    }

    setShowRecaptra(true);
  };

  const onRegister = async ({
    pName,
    pEmail,
    pPassword,
    pSponsor,
    pGRecaptchaResponse,
  }) => {
    showLoading();
    const res = await register({
      name: pName,
      email: pEmail,
      password: pPassword,
      sponsor: pSponsor,
      gRecaptchaResponse: pGRecaptchaResponse,
    });

    if (res && res?.isSuccess) {
      showSuccessToast(t('msg_register_success'));
      onNavigateToSignIn();
    }
  };

  const onNavigateToSignIn = () => {
    NavigationService.goBack();
  };

  const onMessage = (event) => {
    if (event && event.nativeEvent.data) {
      if (['cancel', 'error', 'expired'].includes(event.nativeEvent.data)) {
        setShowRecaptra(false);
        return;
      } else {
        console.log('Verified code from Google', event.nativeEvent.data);
        setShowRecaptra(false);

        const sponsor = isEmpty(sponsorId?.trim())
          ? 'ACWALLET'
          : sponsorId?.trim();

        onRegister({
          pName: name?.trim(),
          pEmail: email?.trim(),
          pPassword: password?.trim(),
          pSponsor: sponsor,
          pGRecaptchaResponse: event.nativeEvent.data,
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.contentScrollContainer}>
          <NavTitleBackHeader
            containerStyle={styles.header}
            title={t('sign_up')}
          />
          <Text style={styles.subTitle}>{t('privacy_text_1')}</Text>
          <View style={styles.smallLine} />
          <View style={styles.contentContainer}>
            <IconInput
              containerStyle={styles.nameInput}
              icon={ICO_INPUT_NAME}
              placeholder={t('input_name')}
              onChangeText={(value) => setName(value)}
              autoCapitalize="none"
            />
            <IconInput
              containerStyle={styles.emailInput}
              icon={ICO_INPUT_EMAIL}
              placeholder={t('email')}
              onChangeText={(value) => setEmail(value)}
              autoCapitalize="none"
            />
            <IconInput
              containerStyle={styles.passwordInput}
              icon={ICO_INPUT_PASSWORD}
              placeholder={t('password')}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={true}
              autoCapitalize="none"
            />
            <IconInput
              containerStyle={styles.emailInput}
              icon={ICO_SPONSOR}
              placeholder={t('placeholder_sponsor')}
              onChangeText={(value) => setSponsorId(value)}
              autoCapitalize="none"
            />
            <BlueButton
              containerStyle={styles.signUpBtn}
              title={t('create_new_account')}
              onPress={onSignUp}
            />

            <Text style={styles.guideText}>{t('sign_up_guide')}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.accountText}>{t('already_account')}</Text>
            <TouchableX onPress={onNavigateToSignIn}>
              <Text style={styles.signInText}>{t('sign_in_normal_case')}</Text>
            </TouchableX>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <AppVersionInfo />
      <ConfirmGoogleCaptcha
        siteKey={GOOGLE_RECAPTRA.SITE_KEY}
        baseUrl={GOOGLE_RECAPTRA.DOMAIN}
        languageCode={localeProvider.name}
        onMessage={onMessage}
        show={showRecaptra}
        cancelButtonText={t('cancel')}
      />
    </View>
  );
};
