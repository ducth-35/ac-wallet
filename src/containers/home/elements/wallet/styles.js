import { StyleSheet } from 'react-native';

import { Colors, actuatedNormalize, FontFamily } from '@/themes';

const styles = StyleSheet.create({
  container: {
    marginTop: actuatedNormalize(30),
    paddingHorizontal: actuatedNormalize(20),
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },

  walletView: {
    width: actuatedNormalize(70),
    backgroundColor: Colors.SECONDARY,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },

  walletText: {
    fontFamily: FontFamily.TitilliumWeb.SemiBold,
    fontSize: actuatedNormalize(15),
    color: '#F2F5FA',
  },

  stockText: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(14),
    color: Colors.GREY,
    marginLeft: actuatedNormalize(16),
  },

  optionsText: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(14),
    color: Colors.BLUE,
  },

  list: {
    marginTop: actuatedNormalize(15),
    flex: 1,
    backgroundColor: Colors.SECONDARY,
    borderRadius: 8,
  },

  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.SECONDARY,
    borderRadius: 8,
    paddingVertical: actuatedNormalize(10),
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: actuatedNormalize(15),
  },

  icon: {
    width: actuatedNormalize(38),
    height: actuatedNormalize(38),
  },

  coinName: {
    fontFamily: FontFamily.TitilliumWeb.SemiBold,
    fontSize: actuatedNormalize(16),
    color: Colors.WHITE,
  },

  coinAmountContainer: {
    marginRight: actuatedNormalize(15),
    alignItems: 'flex-end',
  },

  amount: {
    fontFamily: FontFamily.TitilliumWeb.SemiBold,
    fontSize: actuatedNormalize(21),
    color: Colors.WHITE,
    textAlign: 'right',
  },

  coinInfoContainer: {
    marginLeft: actuatedNormalize(10),
  },

  coinNameSmall: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    color: Colors.GREY,
    fontSize: actuatedNormalize(12),
    textAlign: 'left',
  },

  line: {
    backgroundColor: '#1D2631',
    height: 1,
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 20,
  },
});

export default styles;
