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
    justifyContent: 'space-between',
  },

  contentContainer: {
    flex: 1,
  },

  searchContainer: {
    marginTop: actuatedNormalize(10),
    borderColor: Colors.SECONDARY,
    borderRadius: 8,
    borderWidth: 1,
    padding: actuatedNormalize(15),
  },

  scrollView: {
    flex: 1,
  },

  contentScrollContainer: {
    paddingHorizontal: actuatedNormalize(20),
  },

  searchTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(13),
    color: '#F2F5FA',
  },

  inputContainer: {
    width: '100%',
    height: actuatedNormalize(58),
    backgroundColor: Colors.SECONDARY,
    borderRadius: 8,
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  leftContainer: {
    flex: 1,
    padding: actuatedNormalize(15),
  },

  rightContainer: {
    height: '100%',
    width: actuatedNormalize(50),
    backgroundColor: Colors.NEON_GREEN,
    borderTopRightRadius: 8,
    borderBottomEndRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(16),
    color: Colors.WHITE,
  },

  expandButton: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: actuatedNormalize(40),
    width: actuatedNormalize(40),
  },

  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Colors.SECONDARY,
    justifyContent: 'space-between',
    marginTop: actuatedNormalize(15),
  },

  itemLeftContainer: {
    flex: 1,
    padding: actuatedNormalize(15),
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoIcon: {},

  statusView: {
    paddingVertical: 5,
    paddingHorizontal: actuatedNormalize(10),
    borderRadius: 4,
    marginLeft: actuatedNormalize(10),
  },

  bottomButtons: {
    flex: 1,
    flexDirection: 'row',
  },

  button: {
    marginTop: actuatedNormalize(10),
    flex: 1,
    borderRadius: 8,
    height: actuatedNormalize(50),
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightButton: {
    height: '100%',
    width: actuatedNormalize(40),
    justifyContent: 'center',
    alignItems: 'center',
  },

  qrCodeContainer: {
    minHeight: actuatedNormalize(300),
    marginHorizontal: actuatedNormalize(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },

  navRightButton: {
    width: actuatedNormalize(40),
    height: actuatedNormalize(40),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  navLeftButton: {
    width: actuatedNormalize(40),
    height: actuatedNormalize(40),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default styles;
