import { StyleSheet } from 'react-native';

import { Colors, actuatedNormalize, STATUSBAR_HEIGHT } from '@/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
  },

  navHeader: {
    backgroundColor: Colors.SECONDARY,
    minHeight: actuatedNormalize(88) - STATUSBAR_HEIGHT,
  },

  list: {
    flex: 1,
  },
});

export default styles;
