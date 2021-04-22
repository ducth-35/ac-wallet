import { StyleSheet } from 'react-native';

import { Colors, actuatedNormalize, FontFamily } from '@/themes';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: actuatedNormalize(56),
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: 15,
    height: 20,
  },

  input: {
    flex: 1,
    marginLeft: actuatedNormalize(20),
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(16),
    color: Colors.WHITE,
  },

  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },

  rounerContainer: {
    marginHorizontal: actuatedNormalize(20),
  },

  title: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(13),
    color: Colors.WHITE,
  },

  inputContainer: {
    marginTop: actuatedNormalize(7),
    flex: 1,
    height: actuatedNormalize(58),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.SECONDARY,
    borderRadius: 8,
    paddingHorizontal: actuatedNormalize(15),
  },

  rounerInput: {
    flex: 1,
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(16),
    color: Colors.WHITE,
  },
});

export default styles;
