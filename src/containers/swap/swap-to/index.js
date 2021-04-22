import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { isEmpty } from 'lodash';

import { NavTitleBackHeader, BlueButton, ConfirmPopup } from '@/components';
import { useAppContext, useTranslation } from '@/hooks';
import { SWAP_TYPE, showLoading } from '@/common';
import { Colors } from '@/themes';
import { formatCommaNumber } from '@/utils';

import styles from './styles';

export const SwapToScreen = ({ route }) => {
  const { t } = useTranslation();
  const {
    getTransactionCoinFee,
    getCoinRates,
    getUserWallets,
    coinFee,
    coinRates,
    exchangeSell,
    exchangeBuy,
    exchangeBuyConfirm,
    exchangeSellConfirm,
    accountInfo,
  } = useAppContext();

  const type = route.params?.type;
  const coin = route.params?.coin;

  const [quantity, setQuantity] = useState('');
  const [fee, setFee] = useState(0);
  const [coinPrice, setCoinPrice] = useState(0);
  const [authenType, setAuthenType] = useState('none');
  const [isShowConfirmPopup, setIsShowConfirmPopup] = useState(false);

  useEffect(() => {
    getTransactionCoinFee();
    getCoinRates();
    getUserWallets();
  }, []);

  useEffect(() => {
    setAuthenType(accountInfo?.authen_type);
  }, [accountInfo]);

  useEffect(() => {
    if (coinRates) {
      const { rates } = coinRates;
      let rate = 0;

      if (type === SWAP_TYPE.BUY) {
        rate = rates[`ask_${coin.id}`];
      } else {
        rate = rates[`bid_${coin.id}`];
      }

      setCoinPrice(rate);
    }

    if (coinFee) {
      const coin_fee = coinFee[`${coin.id}_fee`];

      setFee(coin_fee);
    }
  }, [coinFee, coinRates]);

  const onSwap = async () => {
    let errorMessage = null;
    if (isEmpty(quantity)) {
      errorMessage = t('invalid_quantity');
    }

    if (errorMessage) {
      showErrorToast(errorMessage);
      return;
    }

    const params = {
      fee: fee,
      currencyCode: coin.currencyCode,
      quantity: quantity,
    };

    showLoading();

    const res =
      type === SWAP_TYPE.BUY
        ? await exchangeBuy(params)
        : await exchangeSell(params);

    if (res.status) {
      if (authenType === 'none') {
        showSuccessToast(
          type === SWAP_TYPE.BUY ? t('buy_success') : t('sell_success'),
        );
        getUserWallets();
      } else {
        setIsShowConfirmPopup(true);
      }
    }
  };

  const onConfirmCode = async (authenCode) => {
    if (!isEmpty(authenCode)) {
      const params = {
        fee: fee,
        currencyCode: coin.currencyCode,
        quantity: quantity,
        token: authenCode,
      };

      showLoading();

      setIsShowConfirmPopup(false);

      const res =
        type === SWAP_TYPE.BUY
          ? await exchangeBuyConfirm(params)
          : await exchangeSellConfirm(params);

      if (res.status) {
        showSuccessToast(
          type === SWAP_TYPE.BUY ? t('buy_success') : t('sell_success'),
        );
        getUserWallets();
      }
    }
  };

  return (
    <View style={styles.container}>
      <NavTitleBackHeader
        containerStyle={styles.navHeader}
        title={`${
          type === SWAP_TYPE.BUY ? t('buy') : t('sell')
        } ${coin.id.toUpperCase()}`}
      />
      <KeyboardAwareScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentScrollContainer}>
        <Text style={styles.title}>{t('quantity').toUpperCase()}</Text>
        <View style={styles.inputContainer}>
          <View style={styles.leftContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor={Colors.GREY}
              keyboardType="decimal-pad"
              onChangeText={(value) => setQuantity(value)}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text
              style={
                styles.rightButtonTitle
              }>{`${coin.id.toUpperCase()}`}</Text>
          </View>
        </View>

        <Text style={styles.title}>{`${
          type === SWAP_TYPE.BUY
            ? t('buy_price').toUpperCase()
            : t('sell_price').toUpperCase()
        }`}</Text>
        <View style={styles.inputContainer}>
          <View style={styles.leftContainer}>
            <TextInput
              style={[styles.input, { color: Colors.GREY }]}
              placeholderTextColor={Colors.GREY}
              value={formatCommaNumber(coinPrice)}
              editable={false}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.rightButtonTitle}>VNDT</Text>
          </View>
        </View>

        <Text style={styles.title}>{t('fee').toUpperCase()}</Text>
        <View style={styles.inputContainer}>
          <View style={styles.leftContainer}>
            <TextInput
              style={[styles.input, { color: Colors.GREY }]}
              placeholderTextColor={Colors.GREY}
              value={formatCommaNumber(parseInt(parseFloat(fee) * coinPrice))}
              editable={false}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.rightButtonTitle}>VNDT</Text>
          </View>
        </View>

        <BlueButton
          title={`${type === SWAP_TYPE.BUY ? t('buy_now') : t('sell_now')}`}
          containerStyle={styles.buyButton}
          onPress={onSwap}
        />
      </KeyboardAwareScrollView>

      <ConfirmPopup
        isVisible={isShowConfirmPopup}
        title={`${
          type === SWAP_TYPE.BUY ? t('confirm_buy') : t('confirm_sell')
        }`}
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
