import { StyleSheet } from 'react-native';

import {
  Colors,
  actuatedNormalize,
  FontFamily,
  STATUSBAR_HEIGHT,
  Metrics,
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

  coinsContainer: {
  },

  list: {
    marginHorizontal: actuatedNormalize(15),
  },

  itemContainer: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.GREY,
    padding: actuatedNormalize(10),
    alignItems: 'center',
    margin: actuatedNormalize(5),
    marginBottom:actuatedNormalize(20),
    height: 100,
    justifyContent: 'center',
  },
  itemContent:{
    flex: 1/3,
  },

  icon: {
    marginTop: 8,
    width: actuatedNormalize(38),
    height: actuatedNormalize(38),
  },

  coinName: {
    marginTop: 5,
    fontFamily: FontFamily.TitilliumWeb.Bold,
    fontSize: actuatedNormalize(13),
    color: Colors.WHITE,
    marginBottom: 8,
  },

  contentContainer: {
    flex: 1,
  },

  tabHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.SECONDARY,
    paddingHorizontal: actuatedNormalize(20),
  },

  tabHeaderItemContainer: {
    marginRight: actuatedNormalize(42),
  },

  tabItemTitle: {
    fontFamily: FontFamily.TitilliumWeb.Bold,
    fontSize: actuatedNormalize(13),
    color: Colors.WHITE,
  },

  indicatorLine: {
    width: '100%',
    height: 4,
    marginTop: 8,
    backgroundColor: Colors.BLUE,
  },

  tabContentContainer: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
  },

  tabItemcontainer: {
    flex: 1,
    width: Metrics.screenWidth,
  },
});

export default styles;
