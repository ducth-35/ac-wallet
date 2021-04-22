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

  input: {
    marginTop: actuatedNormalize(35),
  },

  forgotPasswordBtn: {
    width: undefined,
    marginTop: actuatedNormalize(30),
    marginHorizontal: actuatedNormalize(20),
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '100%',
    marginHorizontal: actuatedNormalize(20),
    borderRadius: actuatedNormalize(15),
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
  },

  mailbox: {
    marginTop: actuatedNormalize(30),
    width: actuatedNormalize(98),
    height: actuatedNormalize(110),
  },

  popupTitle: {
    marginTop: actuatedNormalize(20),
    fontFamily: FontFamily.TitilliumWeb.Bold,
    fontSize: actuatedNormalize(18),
    lineHeight: actuatedNormalize(24),
    textAlign: 'center',
    color: Colors.SECONDARY,
    marginHorizontal: actuatedNormalize(20),
  },

  popupMessage: {
    marginHorizontal: actuatedNormalize(20),
    marginTop: actuatedNormalize(12),
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(14),
    lineHeight: actuatedNormalize(18),
    textAlign: 'center',
    color: Colors.GREY,
  },

  okBtn: {
    width: '80%',
    marginVertical: actuatedNormalize(30),
  },
});

export default styles;
