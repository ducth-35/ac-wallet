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

  title: {
    marginTop: actuatedNormalize(30),
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

  buyButton: {
    marginTop: actuatedNormalize(30),
  },

  swapLineContainer: {
    marginTop: actuatedNormalize(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  swapIcon: {
    marginLeft: actuatedNormalize(10),
    width: actuatedNormalize(36),
    height: actuatedNormalize(36),
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.SECONDARY,
  },
});

export default styles;
