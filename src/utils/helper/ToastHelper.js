import {Toast} from 'react-native-toast-message/lib/src/Toast';

export const showSuccessToast = message => {
  Toast.show({
    type: 'success',
    text1: message,
    position: 'top',
    visibilityTime: 3000,
  });
};

export const showFailToast = (message, message2, onPress) => {
  Toast.show({
    type: 'error',
    text1: message,
    text2: message2 && message2,
    position: 'top',
    visibilityTime: 3000,
    onPress: () => {
      onPress;
    },
  });
};

export const showInfoToast = message => {
  Toast.show({
    type: 'info',
    text1: message,
    position: 'top',
    visibilityTime: 3000,
  });
};
