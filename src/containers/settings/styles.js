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

  list: {
    flex: 1,
  },

  headerContainer: {
    width: '100%',
    height: actuatedNormalize(60),
    paddingHorizontal: actuatedNormalize(20),
    justifyContent: 'flex-end',
    backgroundColor: Colors.PRIMARY,
  },

  headerTitle: {
    fontFamily: FontFamily.TitilliumWeb.Bold,
    fontSize: actuatedNormalize(13),
    color: Colors.GREY,
    marginBottom: 8,
  },

  itemContainer: {
    width: '100%',
    height: actuatedNormalize(64),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: actuatedNormalize(20),
    backgroundColor: Colors.SECONDARY,
  },

  lineContainer: {
    width: '100%',
    height: 1,
    backgroundColor: '#232B36',
  },

  line: {
    flex: 1,
    backgroundColor: Colors.SECONDARY,
    marginHorizontal: actuatedNormalize(20),
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  retangle: {
    width: actuatedNormalize(20),
    height: actuatedNormalize(20),
    backgroundColor: 'rgba(216, 216, 216, 0.2)',
  },

  leftIcon: {
    width: actuatedNormalize(20),
    height: actuatedNormalize(20),
  },

  itemTitle: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(16),
    color: Colors.WHITE,
    marginLeft: actuatedNormalize(15),
  },

  arrowIcon: {
    width: 8,
    height: 12,
  },
});

export default styles;
