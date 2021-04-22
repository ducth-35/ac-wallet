import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { isEmpty } from 'lodash';

import {
  NavTitleBackHeader,
  TouchableX,
  BlueButton,
  QRCodeScannerModal,
  Note,
  ConfirmPopup,
} from '@/components';
import { useAppContext, useTranslation } from '@/hooks';
import {
  showLoading,
  showErrorToast,
  showSuccessToast,
  SUPPORTED_COINS,
} from '@/common';
import { Colors, actuatedNormalize } from '@/themes';
import { formatCommaNumber } from '@/utils';

import styles from './styles';

export const WithdrawCoinScreen = ({ route }) => {
  const { t } = useTranslation();
  const {
    getTransactionCoinFee,
    withdrawMoney,
    getUserWallets,
    coinFee,
    userWallets,
    accountInfo,
    confirmWithdraw,
  } = useAppContext();

  const [showQRCodeScan, setShowQRCodeScan] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [availableCoin, setAvailableCoin] = useState(0);
  const [networkFee, setNetworkFee] = useState('');
  const [tag, setTag] = useState(null);
  const [memo, setMemo] = useState(null);
  const [fee, setFee] = useState(0);
  const [authenType, setAuthenType] = useState('none');
  const [isShowConfirmPopup, setIsShowConfirmPopup] = useState(false);

  const coinId = route.params?.coinId;
  const coin = SUPPORTED_COINS.find((item) => item.id === coinId);

  useEffect(() => {
    getTransactionCoinFee();
    getAvailableCoin();
  }, []);

  useEffect(() => {
    setAuthenType(accountInfo?.authen_type);
  }, [accountInfo]);

  useEffect(() => {
    if (coinFee) {
      let fee = 0;

      if (coinFee) {
        fee = coinFee[`${coinId}_fee`];
      }

      setFee(fee);
      setNetworkFee(`${fee} ${coin.networkFee.toUpperCase()}`);
    }
  }, [coinFee]);

  const getAvailableCoin = () => {
    if (userWallets) {
      const coin = userWallets.find(
        (item) => item.type.toLowerCase() === coinId,
      );

      if (coin) {
        setAvailableCoin(coin);
      }
    }
  };

  const onShowQRCodeScan = () => {
    setShowQRCodeScan(true);
  };

  const onScanQRCodeSuccess = (data) => {
    setWalletAddress(data);
    setShowQRCodeScan(false);
  };

  const onWithdraw = async () => {
    let errorMessage = null;

    if (isEmpty(quantity)) {
      errorMessage = t('invalid_quantity');
    } else if (isEmpty(walletAddress)) {
      errorMessage = t('invalid_address');
    }

    if (coinId === 'xrp') {
      if (isEmpty(tag)) {
        errorMessage = t('invalid_tag');
      }
    }

    if (coinId === 'xlm') {
      if (isEmpty(memo)) {
        errorMessage = t('invalid_memo');
      }
    }

    if (errorMessage) {
      showErrorToast(errorMessage);
      return;
    }

    const params = {
      fee: fee,
      currencyCode: coin.currencyCode,
      quantity: quantity,
      address: walletAddress,
      tag,
      memo,
    };

    showLoading();

    const res = await withdrawMoney(params);

    if (res.status) {
      if (authenType === 'none') {
        showSuccessToast(t('withdraw_success'));
        getUserWallets();
      } else {
        setIsShowConfirmPopup(true);
      }
    }
  };

  const onConfirmCode = async (authenCode) => {
    if (!isEmpty(authenCode)) {
      setIsShowConfirmPopup(false);
      showLoading();

      const params = { token: authenCode };
      const res = await confirmWithdraw(params);

      if (res.status) {
        showSuccessToast(t('withdraw_success'));
        getUserWallets();
      }
    }
  };

  const onSetAllAvailableCoin = () => {
    setQuantity(availableCoin.amount);
  };

  const renderTag = () => {
    if (coinId === 'xrp') {
      return (
        <>
          <Text style={styles.title}>{t('tag').toUpperCase()}</Text>
          <View style={styles.inputContainer}>
            <View style={styles.leftContainer}>
              <TextInput
                style={styles.input}
                placeholderTextColor={Colors.GREY}
                onChangeText={(value) => setTag(value)}
                keyboardType="number-pad"
              />
            </View>
          </View>
        </>
      );
    }

    return null;
  };

  const renderMemo = () => {
    if (coinId === 'xlm') {
      return (
        <>
          <Text style={styles.title}>{t('memo').toUpperCase()}</Text>
          <View style={styles.inputContainer}>
            <View style={styles.leftContainer}>
              <TextInput
                style={styles.input}
                placeholderTextColor={Colors.GREY}
                onChangeText={(value) => setMemo(value)}
              />
            </View>
          </View>
        </>
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <NavTitleBackHeader
        containerStyle={styles.navHeader}
        title={`${t('tab_withdrawal')} ${coinId.toUpperCase()}`}
      />
      <KeyboardAwareScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentScrollContainer}>
        <View style={styles.transactionContainer}>
          <Text style={styles.title}>{t('quantity').toUpperCase()}</Text>
          <TouchableX
            style={styles.transactionContainer}
            onPress={onSetAllAvailableCoin}>
            <Text style={styles.transactionText}>{t('you_have')}</Text>
            <Text style={[styles.transactionText, { color: Colors.BLUE }]}>
              {formatCommaNumber(availableCoin.amount)} {coinId.toUpperCase()}
            </Text>
          </TouchableX>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.leftContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor={Colors.GREY}
              keyboardType="decimal-pad"
              value={quantity}
              onChangeText={(value) => setQuantity(value)}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.rightButtonTitle}>{coinId.toUpperCase()}</Text>
          </View>
        </View>

        <Text style={styles.title}>{t('address').toUpperCase()}</Text>
        <View style={styles.inputContainer}>
          <View style={styles.leftContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor={Colors.GREY}
              value={walletAddress}
              onChangeText={(value) => setWalletAddress(value)}
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

        {renderTag()}
        {renderMemo()}

        <Text style={styles.title}>{t('network_fee').toUpperCase()}</Text>
        <View style={styles.inputContainer}>
          <View style={styles.leftContainer}>
            <TextInput
              style={[styles.input, { color: Colors.GREY }]}
              value={'Medium'}
              editable={false}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.rightButtonTitle}>{networkFee}</Text>
          </View>
        </View>

        <BlueButton
          title={t('tab_withdrawal').toUpperCase()}
          containerStyle={styles.buyButton}
          onPress={onWithdraw}
        />

        <Note coinId={coinId} containerStyle={styles.noteContainer} />
      </KeyboardAwareScrollView>
      <QRCodeScannerModal
        isVisible={showQRCodeScan}
        onSuccess={onScanQRCodeSuccess}
        onDismiss={() => setShowQRCodeScan(false)}
      />
      <ConfirmPopup
        isVisible={isShowConfirmPopup}
        title={t('confirm_withdraw')}
        subTitle={
          authenType === 'google'
            ? t('enter_google_authen_code')
            : t('enter_email_authen_code')
        }
        onConfirmCode={onConfirmCode}
      />
    </View>
  );
};
