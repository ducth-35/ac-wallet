import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import Modal from 'react-native-modal';

import GoogleReCaptcha from './google-recapchar';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

const ConfirmGoogleCaptcha = ({
  siteKey,
  baseUrl,
  languageCode,
  onMessage,
  cancelButtonText,
  show,
}) => {
  return (
    <Modal
      useNativeDriver
      hideModalContentWhileAnimating
      deviceHeight={height}
      deviceWidth={width}
      style={styles.modal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={show}>
      <View style={styles.wrapper}>
        <GoogleReCaptcha
          url={baseUrl}
          siteKey={siteKey}
          onMessage={onMessage}
          languageCode={languageCode}
          cancelButtonText={cancelButtonText}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  modal: { margin: 0 },
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

ConfirmGoogleCaptcha.propTypes = {
  siteKey: PropTypes.string.isRequired,
  baseUrl: PropTypes.string,
  onMessage: PropTypes.func,
  languageCode: PropTypes.string,
  cancelButtonText: PropTypes.string,
};

export default ConfirmGoogleCaptcha;
