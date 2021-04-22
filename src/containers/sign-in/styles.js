import { StyleSheet } from 'react-native';

import { Colors, actuatedNormalize, FontFamily } from '@/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },

  scrollView: {
    flex: 1,
  },

  contentScrollContainer: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },

  loginText: {
    fontFamily: FontFamily.TitilliumWeb.SemiBold,
    fontSize: actuatedNormalize(24),
    color: Colors.WHITE,
    marginTop: actuatedNormalize(30),
    textAlign: 'center',
  },

  subTitle: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(13),
    color: Colors.WHITE,
    marginTop: actuatedNormalize(5),
    lineHeight: actuatedNormalize(20),
    marginHorizontal: actuatedNormalize(20),
    textAlign: 'center',
  },

  smallLine: {
    marginTop: actuatedNormalize(10),
    width: actuatedNormalize(10),
    height: 1,
    backgroundColor: Colors.WHITE,
    alignSelf: 'center',
  },

  contentContainer: {
    marginHorizontal: actuatedNormalize(20),
    backgroundColor: 'rgba(51,60,73, 0.4)',
    marginTop: actuatedNormalize(30),
    borderRadius: 15,
    alignItems: 'center',
    paddingHorizontal: actuatedNormalize(17),
  },

  emailInput: {
    marginTop: actuatedNormalize(28),
  },

  passwordInput: {
    marginTop: 5,
  },

  signInBtn: {
    marginTop: actuatedNormalize(30),
  },

  faceIdBtn: {
    marginTop: actuatedNormalize(28),
  },

  faceIdText: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(14),
    color: Colors.WHITE,
  },

  forgotPasswordBtn: {
    marginTop: actuatedNormalize(32),
    marginBottom: actuatedNormalize(32),
  },

  forgetPasswordText: {
    fontFamily: FontFamily.TitilliumWeb.Bold,
    fontSize: actuatedNormalize(14),
    color: Colors.BLUE,
    textDecorationLine: 'underline',
  },

  row: {
    marginTop: actuatedNormalize(32),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  accountText: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(16),
    color: Colors.WHITE,
  },

  signUpText: {
    marginLeft: 5,
    fontFamily: FontFamily.TitilliumWeb.Bold,
    fontSize: actuatedNormalize(16),
    textDecorationLine: 'underline',
    color: Colors.BLUE,
  },
});

export default styles;
