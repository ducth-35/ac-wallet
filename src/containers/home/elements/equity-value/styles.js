import { StyleSheet } from 'react-native';

import { Colors, actuatedNormalize, FontFamily } from '@/themes';

const styles = StyleSheet.create({
  container: {
    marginTop: actuatedNormalize(20),
    paddingHorizontal: actuatedNormalize(20),
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(12),
    color: '#F2F5FA',
  },

  iconEye: {
    marginLeft: actuatedNormalize(10),
  },

  balance: {
    fontFamily: FontFamily.TitilliumWeb.SemiBold,
    fontSize: actuatedNormalize(28),
    color: Colors.WHITE,
  },

  currency: {
    marginLeft: actuatedNormalize(10),
    fontFamily: FontFamily.TitilliumWeb.SemiBold,
    fontSize: actuatedNormalize(16),
    color: '#73899C',
  },

  list: {
    marginTop: actuatedNormalize(10),
  },

  coinName: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(10),
    color: Colors.GREY,
  },

  coinValue: {
    marginLeft: actuatedNormalize(10),
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(10),
    color: Colors.BLUE,
  },
});

export default styles;
