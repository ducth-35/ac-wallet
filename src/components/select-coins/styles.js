import { StyleSheet } from 'react-native';

import {
  Colors,
  actuatedNormalize,
  FontFamily,
  STATUSBAR_HEIGHT,
  Metrics,
} from '@/themes';

const styles = StyleSheet.create({
  container: {},

  list: {
    marginHorizontal: actuatedNormalize(15),
  },

  itemContainer: {
    flex: 1 / 3,
  },

  itemContent: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.GREY,
    padding: actuatedNormalize(10),
    alignItems: 'center',
    margin: actuatedNormalize(5),
    height: 100,
    justifyContent: 'center'
  },

  icon: {
    marginTop: 8,
    width: actuatedNormalize(38),
    height: actuatedNormalize(38),
  },

  coinName: {
    marginTop: 5,
    fontFamily: FontFamily.TitilliumWeb.Bold,
    fontSize: actuatedNormalize(13),
    color: Colors.WHITE,
    marginBottom: 8,
  },
});

export default styles;
