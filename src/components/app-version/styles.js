import { StyleSheet } from 'react-native';

import { Colors, actuatedNormalize, FontFamily } from '@/themes';

const styles = StyleSheet.create({
  versionText: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(14),
    color: Colors.GREY,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default styles;
