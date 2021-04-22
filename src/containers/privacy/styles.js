import { StyleSheet } from 'react-native';

import { Colors, actuatedNormalize, FontFamily } from '@/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },

  contentContainer: {
    flex: 1,
    marginVertical: actuatedNormalize(15),
    marginHorizontal: actuatedNormalize(20),
    borderRadius: actuatedNormalize(15),
    backgroundColor: Colors.DARK_GREY,
    justifyContent: 'flex-end',
  },

  topContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },

  bigTitle: {
    marginTop: actuatedNormalize(15),
    fontFamily: FontFamily.TitilliumWeb.SemiBold,
    fontSize: actuatedNormalize(24),
    color: Colors.WHITE,
    marginHorizontal: actuatedNormalize(20),
    textAlign: 'center',
  },

  subTitle: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(13),
    lineHeight: actuatedNormalize(20),
    color: Colors.WHITE,
    marginTop: actuatedNormalize(10),
    marginHorizontal: actuatedNormalize(20),
    textAlign: 'center',
  },

  line: {
    marginTop: actuatedNormalize(10),
    width: 10,
    height: 1,
    backgroundColor: Colors.WHITE,
  },

  bottomContainer: {
    height: actuatedNormalize(175),
    backgroundColor: Colors.SECONDARY,
    borderBottomLeftRadius: actuatedNormalize(15),
    borderBottomRightRadius: actuatedNormalize(15),
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: actuatedNormalize(25),
  },

  agreeText: {
    marginLeft: actuatedNormalize(15),
    color: '#fff',
    fontFamily: FontFamily.TitilliumWeb.Bold,
    fontSize: 11,
  },

  continueBtn: {
    width: actuatedNormalize(250),
  },
});

export default styles;
