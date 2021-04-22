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

  contentScrollContainer: {
    paddingHorizontal: actuatedNormalize(20),
  },

  searchContainer: {
    paddingHorizontal: actuatedNormalize(20),
    zIndex: 1,
  },

  title: {
    marginTop: actuatedNormalize(30),
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(13),
    color: '#F2F5FA',
  },

  inputContainer: {
    width: '100%',
    minHeight: actuatedNormalize(58),
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

  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    padding: actuatedNormalize(15),
  },

  searchItemContainer: {
    height: actuatedNormalize(40),
    justifyContent: 'center',
    padding: actuatedNormalize(10),
  },

  searchingContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: actuatedNormalize(40),
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightContainer: {
    height: '100%',
    width: actuatedNormalize(105),
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

  rightButtonTitle: {
    fontFamily: FontFamily.TitilliumWeb.Bold,
    fontSize: actuatedNormalize(14),
    color: '#F2F5FA',
    marginRight: 6,
  },

  arrowIcon: {
    width: 12,
    height: 8,
  },

  transactionContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },

  transactionText: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(12),
    color: '#F2F5FA',
  },

  transferButton: {
    marginTop: actuatedNormalize(30),
  },
});

export default styles;
