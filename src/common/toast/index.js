import Toast from 'react-native-tiny-toast';
import { PADDING_BOTTOM, Colors } from '@/themes';

let toast;

export function showToast(message, type, duration = 3000) {
  Toast.show(message, {
    position: -1,
    duration: duration,
    textColor: Colors.WHITE,

    containerStyle: {
      backgroundColor:
        type == 'success'
          ? Colors.BLUE
          : type == 'error'
          ? Colors.RED
          : type == 'info'
          ? Colors.NEON_GREEN
          : 'white',

      borderRadius: 10,
      paddingVertical: 5,
      paddingHorizontal: 15,
      marginHorizontal: 25,
      marginBottom: PADDING_BOTTOM + 30,
    },
  });
}

export function hideLoading() {
  Toast.hide(toast);
}

export function showLoading(message = '') {
  toast = Toast.showLoading(message, {
    position: Toast.position.CENTER,
    containerStyle: {
      padding: 30,
      backgroundColor: 'rgba(0,0,0, 0.7)',
    },
    textColor: 'white',
    textstyle: { fontSize: 14 },
  });
}

export function showErrorToast(message) {
  showToast(message, 'error');
}

export function showSuccessToast(message) {
  showToast(message, 'success');
}

export function showInfoToast(message) {
  showToast(message, 'info');
}
