import { StyleSheet } from 'react-native';

import { Colors, actuatedNormalize, FontFamily } from '@/themes';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: actuatedNormalize(56),
    backgroundColor: Colors.BLUE,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontFamily: FontFamily.TitilliumWeb.Bold,
    fontSize: actuatedNormalize(13),
    color: Colors.WHITE,
  },
});

export default styles;
