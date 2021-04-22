import React, { useState, useEffect } from 'react';
import { View, Text, Platform } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { isEmpty } from 'lodash';

import { useTranslation, useAppContext } from '@/hooks';
import { ConfirmGoogleCaptcha, NavigationService } from '@/services';
import {
  IconInput,
  TouchableX,
  AppVersionInfo,
  BlueButton,
  ConfirmPopup,
} from '@/components';
import {
  ICO_INPUT_EMAIL,
  ICO_INPUT_PASSWORD,
  GOOGLE_RECAPTRA,
  showErrorToast,
  showLoading,
  Routes,
} from '@/common';
import { validateEmail, validatePassword } from '@/utils';

import styles from './styles';

export const SignInScreen = () => {
  const { t, localeProvider } = useTranslation();
  const { checkLogin, login, confirmLogin } = useAppContext();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isAvailableFaceID, setIsAvailableFaceID] = useState(false);
  const [showRecaptra, setShowRecaptra] = useState(false);
  const [isLoginBiometrics, setIsLoginBiometrics] = useState(false);
  const [isShowConfirmPopup, setIsShowConfirmPopup] = useState(false);
  const [authenType, setAuthenType] = useState('none');

  useEffect(() => {
    onCheckBiometricsAvailable();

    return () => {
      if (Platform.OS === 'android') {
        FingerprintScanner.release();
      }
    };
  }, []);

  useEffect(() => {
    if (authenType !== 'none') {
      setIsShowConfirmPopup(true);
    }
  }, [authenType]);

  const onSignIn = () => {
    let errorMessage = null;
    if (!validateEmail(email?.trim())) {
      errorMessage = t('invalid_email');
    } else if (!validatePassword(password?.trim())) {
      errorMessage = t('invalid_password');
    }

    if (errorMessage) {
      showErrorToast(errorMessage);
      return;
    }

    setIsLoginBiometrics(false);
    setShowRecaptra(true);
  };

  const onLogin = async ({ pEmail, pPassword, pGRecaptchaResponse }) => {
    showLoading();
    const res = await login({
      email: pEmail,
      password: pPassword,
      gRecaptchaResponse: pGRecaptchaResponse,
    });

    console.log('Res Login =================: ', res);

    if (res.status) {
      if (res.data?.authen === 'google' || res.data?.authen === 'email') {
        setAuthenType(res.data?.authen);
      }
    }
  };

  const onLoginBiometrics = async () => {
    setIsLoginBiometrics(true);
    setShowRecaptra(true);
  };

  const onNavigateToSignUp = () => {
    NavigationService.navigate(Routes.SIGN_UP);
  };

  const onNavigateToForgotPassword = () => {
    NavigationService.navigate(Routes.FORGOT_PASSWORD);
  };

  const onSignInWighFaceId = () => {
    if (Platform.OS === 'ios') {
      FingerprintScanner.authenticate({
        description: t('message_scan_face_id'),
      })
        .then(() => {
          //On login biometrics
          onLoginBiometrics();
        })
        .catch((error) => {
          showErrorToast(error.message);
        });
    } else {
      if (requiresLegacyAuthentication()) {
        authLegacy();
      } else {
        authCurrent();
      }
    }
  };

  const requiresLegacyAuthentication = () => {
    return Platform.Version < 23;
  };

  const authCurrent = () => {
    FingerprintScanner.authenticate({
      title: t('title_login_biometrics'),
    }).then(() => {
      //On login biometrics
      onLoginBiometrics();
    });
  };

  const authLegacy = () => {
    FingerprintScanner.authenticate({
      onAttempt: handleAuthenticationAttemptedLegacy,
    })
      .then(() => {
        //On login biometrics
        onLoginBiometrics();
      })
      .catch((error) => {
        showErrorToast(error.message);
      });
  };

  const handleAuthenticationAttemptedLegacy = (error) => {
    if (error) {
      showErrorToast(error.message);
    }
  };

  const onCheckBiometricsAvailable = async () => {
    try {
      const resBio = await FingerprintScanner.isSensorAvailable();
      let isAvailable = false;

      if (Platform.OS === 'ios') {
        isAvailable = true;
      } else if (Platform.OS === 'android') {
        if (resBio === 'Biometrics') {
          isAvailable = true;
        }
      }

      if (isAvailable) {
        const resCheckLogin = await checkLogin();

        if (resCheckLogin?.status) {
          setIsAvailableFaceID(true);
        }
      }
    } catch (err) {
      console.log('biometric error: ', err);
    }
  };

  const onMessage = async (event) => {
    if (event && event.nativeEvent.data) {
      if (['cancel', 'error', 'expired'].includes(event.nativeEvent.data)) {
        setShowRecaptra(false);
        return;
      } else {
        console.log('Verified code from Google', event.nativeEvent.data);
        setShowRecaptra(false);

        let pEmail = email?.trim();
        let pPassword = password?.trim();

        if (isLoginBiometrics) {
          const resCheckLogin = await checkLogin();
          if (resCheckLogin?.status) {
            pEmail = resCheckLogin?.email;
            pPassword = resCheckLogin?.password;
          }
        }

        onLogin({
          pEmail: pEmail,
          pPassword: pPassword,
          pGRecaptchaResponse: event.nativeEvent.data,
        });
      }
    }
  };

  const onConfirmCode = async (authenCode) => {
    if (!isEmpty(authenCode)) {
      setIsShowConfirmPopup(false);

      const params = { email: email, token: authenCode };
      showLoading();

      const res = await confirmLogin(params);

      if (!res.status) {
        setIsShowConfirmPopup(true);
      }
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.contentScrollContainer}>
          <Text style={styles.loginText}>{t('login')}</Text>
          <Text style={styles.subTitle}>{t('privacy_text_1')}</Text>
          <View style={styles.smallLine} />
          <View style={styles.contentContainer}>
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
            <BlueButton
              containerStyle={styles.signInBtn}
              title={t('sign_in')}
              onPress={onSignIn}
            />
            {isAvailableFaceID && (
              <TouchableX style={styles.faceIdBtn} onPress={onSignInWighFaceId}>
                <Text style={styles.faceIdText}>
                  {t('sign_in_with_faceid')}
                </Text>
              </TouchableX>
            )}

            <TouchableX
              style={styles.forgotPasswordBtn}
              onPress={onNavigateToForgotPassword}>
              <Text style={styles.forgetPasswordText}>
                {t('forgot_password')}
              </Text>
            </TouchableX>
          </View>
          <View style={styles.row}>
            <Text style={styles.accountText}>{t('dont_have_an_account')}</Text>
            <TouchableX onPress={onNavigateToSignUp}>
              <Text style={styles.signUpText}>{t('sign_up')}</Text>
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
      <ConfirmPopup
        isVisible={isShowConfirmPopup}
        title={t('confirm_login')}
        subTitle={
          authenType === 'google'
            ? t('enter_google_authen_code')
            : t('enter_email_authen_code')
        }
        onConfirmCode={onConfirmCode}
      />
    </View>
  );
};
