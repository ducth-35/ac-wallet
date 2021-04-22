import { StyleSheet } from 'react-native';

import { Colors, actuatedNormalize, FontFamily } from '@/themes';

const styles = StyleSheet.create({
  container: {
    marginTop: actuatedNormalize(30),
    height: actuatedNormalize(130),
    borderRadius: 10,
    backgroundColor: '#647787',
    marginHorizontal: actuatedNormalize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },

  bannerText: {
    color: 'white',
    fontFamily: FontFamily.TitilliumWeb.SemiBold,
    fontSize: actuatedNormalize(20),
  },
});

export default styles;
