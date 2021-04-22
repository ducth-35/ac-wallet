import { StyleSheet } from 'react-native';

import { Colors, actuatedNormalize, FontFamily } from '@/themes';

const styles = StyleSheet.create({
  container: {
    marginTop: actuatedNormalize(30),
    paddingHorizontal: actuatedNormalize(20),
  },

  title: {
    fontFamily: FontFamily.TitilliumWeb.SemiBold,
    fontSize: actuatedNormalize(20),
    color: '#F2F5FA',
  },

  list: {
    marginTop: actuatedNormalize(13),
  },

  itemContainer: {
    width: actuatedNormalize(310),
    height: actuatedNormalize(218),
    borderRadius: actuatedNormalize(12),
    backgroundColor: Colors.SECONDARY,
    overflow: 'hidden',
    marginRight: actuatedNormalize(10),
  },

  thumbnail: {
    width: '100%',
    height: actuatedNormalize(145),
    borderTopLeftRadius: actuatedNormalize(12),
    borderTopRightRadius: actuatedNormalize(12),
  },

  contentContainer: {
    flex: 1,
    paddingHorizontal: actuatedNormalize(16),
    paddingVertical: actuatedNormalize(10),
  },

  content: {
    flex: 1,
    fontFamily: FontFamily.TitilliumWeb.SemiBold,
    fontSize: actuatedNormalize(16),
    color: Colors.WHITE,
  },
});

export default styles;
