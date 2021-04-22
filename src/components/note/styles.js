import { StyleSheet } from 'react-native';

import { Colors, actuatedNormalize, FontFamily } from '@/themes';

const styles = StyleSheet.create({
  noteContainer: {
    backgroundColor: 'rgba(255,243,214, 1.0)',
    borderRadius: 8,
    marginTop: actuatedNormalize(40),
    marginHorizontal: actuatedNormalize(20),
    paddingHorizontal: actuatedNormalize(20),
    paddingVertical: actuatedNormalize(15),
  },

  noteTitle: {
    fontFamily: FontFamily.TitilliumWeb.SemiBold,
    fontSize: actuatedNormalize(16),
    color: Colors.ORANGE,
    marginBottom: 5,
  },

  noteMessage: {
    marginTop: 5,
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(14),
    color: Colors.ORANGE,
  },
});

export default styles;
