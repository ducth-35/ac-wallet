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

  header: {
    marginTop: actuatedNormalize(30),
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

  nameInput: {
    marginTop: actuatedNormalize(28),
  },

  emailInput: {
    marginTop: 5,
  },

  passwordInput: {
    marginTop: 5,
  },

  signUpBtn: {
    marginTop: actuatedNormalize(30),
  },

  guideText: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(14),
    color: Colors.WHITE,
    lineHeight: actuatedNormalize(21),
    marginTop: actuatedNormalize(20),
    textAlign: 'left',
    marginBottom: actuatedNormalize(30),
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

  signInText: {
    marginLeft: 5,
    fontFamily: FontFamily.TitilliumWeb.Bold,
    fontSize: actuatedNormalize(16),
    textDecorationLine: 'underline',
    color: Colors.BLUE,
  },
});

export default styles;
