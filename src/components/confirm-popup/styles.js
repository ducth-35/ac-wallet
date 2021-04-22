import { StyleSheet } from 'react-native';

import { Colors, actuatedNormalize, FontFamily } from '@/themes';

const styles = StyleSheet.create({
  modalContent: {
    marginHorizontal: actuatedNormalize(20),
    borderRadius: actuatedNormalize(15),
    backgroundColor: Colors.SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: actuatedNormalize(15),
    paddingVertical: actuatedNormalize(15),
  },

  title: {
    fontFamily: FontFamily.TitilliumWeb.SemiBold,
    fontSize: actuatedNormalize(18),
    color: Colors.WHITE,
  },

  content: {
    marginHorizontal: actuatedNormalize(15),
    marginTop: actuatedNormalize(10),
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(15),
    color: Colors.WHITE,
  },

  rounerInputContainer: {
    marginHorizontal: actuatedNormalize(15),
    marginTop: actuatedNormalize(10),
    height: actuatedNormalize(58),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    paddingHorizontal: actuatedNormalize(15),
  },

  rounerInput: {
    flex: 1,
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(16),
    color: Colors.DARK_GREY,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  confirmBtn: {
    width: '90%',
    marginHorizontal: actuatedNormalize(15),
    marginTop: actuatedNormalize(20),
    marginBottom: actuatedNormalize(20),
  },
});

export default styles;
