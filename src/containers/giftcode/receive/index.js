import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { isEmpty } from 'lodash';
import Modal from 'react-native-modal';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  NavTitleBackHeader,
  BlueButton,
  TouchableX,
  QRCodeScannerModal,
} from '@/components';
import { useTranslation, useAppContext } from '@/hooks';
import { formatCommaNumber } from '@/utils';
import { Colors, actuatedNormalize } from '@/themes';
import { showLoading, showErrorToast, showSuccessToast } from '@/common';

import styles from './styles';

export const ReceiveGiftcodeScreen = () => {
  const { t } = useTranslation();
  const { validateGiftCode, scanGiftCode, getListGiftcode } = useAppContext();

  const [giftcode, setGiftcode] = useState(null);
  const [pincode, setPincode] = useState(null);
  const [uid, setUid] = useState(null);
  const [type, setType] = useState(null);
  const [giftcodeSuccessInfo, setGiftCodeSuccessInfo] = useState(null);
  const [showQRCodeScan, setShowQRCodeScan] = useState(false);

  const onContinue = async () => {
    if (!type) {
      let errorMessage = null;
      if (isEmpty(giftcode)) {
        errorMessage = t('invalid_giftcode');
      }

      if (errorMessage) {
        showErrorToast(errorMessage);
        return;
      }

      const params = { code: giftcode };
      showLoading();

      const res = await validateGiftCode(params);

      if (res.status) {
        if (res.data.status === 200) {
          setGiftCodeSuccessInfo(res.data);
        } else {
          if (res.data.type) {
            setType(res.data.type);
          }
        }
      }
    } else {
      let errorMessage = null;

      if (type === 'private') {
        if (isEmpty(pincode)) {
          errorMessage = t('invalid_pincode');
        }
      } else if (type === 'fixedSender') {
        if (isEmpty(uid)) {
          errorMessage = t('invalid_uid');
        }
      }

      if (errorMessage) {
        showErrorToast(errorMessage);
        return;
      }

      const params = { code: giftcode };

      showLoading();

      if (type === 'private') {
        params['pincode'] = pincode;
      } else if (type === 'fixedSender') {
        params['uid'] = uid;
      }

      const res = await scanGiftCode(params);
      if (res.status) {
        setGiftCodeSuccessInfo(res.data);
      }
    }
  };

  const onClosePopup = () => {
    setGiftCodeSuccessInfo(null);
    setGiftcode(null);
    setPincode(null);
    setUid(null);
    setType(null);
    getListGiftcode();
  };

  const renderConditionsView = () => {
    if (!type) {
      return null;
    }

    if (type === 'private') {
      return (
        <>
          <Text style={[styles.title, { marginTop: actuatedNormalize(20) }]}>
            {t('giftcode_require_pin').toUpperCase()}
          </Text>
          <View style={styles.inputContainer}>
            <View style={styles.leftContainer}>
              <TextInput
                style={[styles.input, { color: Colors.GREY }]}
                placeholderTextColor={Colors.GREY}
                onChangeText={(value) => setPincode(value)}
                value={pincode ? pincode : ''}
              />
            </View>
          </View>
        </>
      );
    } else if (type === 'fixedSender') {
      return (
        <>
          <Text style={[styles.title, { marginTop: actuatedNormalize(20) }]}>
            {t('giftcode_require_creator').toUpperCase()}
          </Text>
          <View style={styles.inputContainer}>
            <View style={styles.leftContainer}>
              <TextInput
                style={[styles.input, { color: Colors.GREY }]}
                placeholderTextColor={Colors.GREY}
                onChangeText={(value) => setUid(value)}
                value={uid ? uid : ''}
              />
            </View>
          </View>
        </>
      );
    }
  };

  const onShowQRCodeScan = () => {
    setShowQRCodeScan(true);
  };

  const onScanQRCodeSuccess = (data) => {
    setGiftcode(data);
    setShowQRCodeScan(false);
  };

  return (
    <View style={styles.container}>
      <NavTitleBackHeader
        containerStyle={styles.navHeader}
        title={t('enter_giftcode')}
      />
      <KeyboardAwareScrollView
        style={styles.scrollView}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.contentScrollContainer}>
        <Text style={[styles.title, { marginTop: actuatedNormalize(20) }]}>
          {t('please_enter_giftcode').toUpperCase()}
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.leftContainer}>
            <TextInput
              style={[styles.input, { color: Colors.GREY }]}
              placeholderTextColor={Colors.GREY}
              onChangeText={(value) => setGiftcode(value)}
              value={giftcode ? giftcode : ''}
            />
          </View>
          <TouchableX
            style={[styles.rightContainer]}
            onPress={onShowQRCodeScan}>
            <FontAwesome
              name="qrcode"
              color="white"
              size={actuatedNormalize(20)}
            />
          </TouchableX>
        </View>
        {renderConditionsView()}
        <BlueButton
          title={t('continue')}
          containerStyle={styles.continueButton}
          onPress={onContinue}
        />
      </KeyboardAwareScrollView>
      <Modal
        isVisible={giftcodeSuccessInfo !== null}
        onRequestClose={onClosePopup}
        onBackdropPress={onClosePopup}>
        <View style={styles.modalContainer}>
          <Text
            style={[
              styles.title,
              {
                fontWeight: 'bold',
                color: Colors.GREY,
                fontSize: actuatedNormalize(20),
                textAlign: 'center',
              },
            ]}>
            {t('receive_giftcode_success_msg')}
          </Text>
          <View style={styles.row}>
            <Text
              style={[
                styles.title,
                { color: Colors.GREY, fontWeight: 'bold', marginRight: 10 },
              ]}>
              {`${t('quantity')}:`}
            </Text>
            <Text style={[styles.title, { color: Colors.BLUE }]}>
              {`${formatCommaNumber(giftcodeSuccessInfo?.quantity)} ${
                giftcodeSuccessInfo?.currency
              }`}
            </Text>
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.title,
                { color: Colors.GREY, fontWeight: 'bold', marginRight: 10 },
              ]}>
              {`${t('hash')}:`}
            </Text>
            <Text style={[styles.title, { color: Colors.GREY }]}>
              {`${giftcodeSuccessInfo?.hash}`}
            </Text>
          </View>
        </View>
      </Modal>

      <QRCodeScannerModal
        isVisible={showQRCodeScan}
        onSuccess={onScanQRCodeSuccess}
        onDismiss={() => setShowQRCodeScan(false)}
      />
    </View>
  );
};
