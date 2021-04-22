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

  title: {
    fontFamily: FontFamily.TitilliumWeb.SemiBold,
    fontSize: actuatedNormalize(20),
    color: '#F2F5FA',
  },

  transactionsText: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(14),
    color: Colors.BLUE,
  },

  contentContainer: {
    height: actuatedNormalize(120),
    marginTop: actuatedNormalize(13),
    flexDirection: 'row',
  },

  itemContainer: {
    flex: 1,
    backgroundColor: '#2A323D',
    borderRadius: actuatedNormalize(12),
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: actuatedNormalize(38),
    height: actuatedNormalize(38),
    borderRadius: actuatedNormalize(19),
  },

  itemTitle: {
    marginTop: 5,
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(13),
    color: '#A0B5C6',
  },
});

export default styles;
