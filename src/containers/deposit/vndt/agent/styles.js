import { StyleSheet } from 'react-native';

import {
  Colors,
  actuatedNormalize,
  FontFamily,
  STATUSBAR_HEIGHT,
} from '@/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },

  navHeader: {
    backgroundColor: Colors.SECONDARY,
    height: actuatedNormalize(88) - STATUSBAR_HEIGHT,
  },

  scrollView: {
    flex: 1,
  },

  listHeaderContainer: {
    paddingHorizontal: actuatedNormalize(20),
    paddingVertical: actuatedNormalize(15),
  },

  headerText: {
    fontFamily: FontFamily.TitilliumWeb.SemiBold,
    fontSize: actuatedNormalize(15),
    color: Colors.WHITE,
    textAlign: 'center',
  },

  itemContainer: {
    marginHorizontal: actuatedNormalize(20),
    borderRadius: 8,
    backgroundColor: Colors.SECONDARY,
    paddingHorizontal: actuatedNormalize(15),
    paddingVertical: actuatedNormalize(15),
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: actuatedNormalize(50),
    height: actuatedNormalize(50),
  },

  name: {
    marginTop: actuatedNormalize(10),
    fontFamily: FontFamily.TitilliumWeb.Bold,
    fontSize: actuatedNormalize(18),
    color: Colors.BLUE,
  },

  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  leftText: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(15),
    color: Colors.GREY,
  },

  rightText: {
    marginLeft: 5,
    fontFamily: FontFamily.TitilliumWeb.SemiBold,
    fontSize: actuatedNormalize(15),
    color: Colors.WHITE,
  },

  socialIcon: {
    width: actuatedNormalize(30),
    height: actuatedNormalize(30),
    borderRadius: actuatedNormalize(15),
  },
});

export default styles;
