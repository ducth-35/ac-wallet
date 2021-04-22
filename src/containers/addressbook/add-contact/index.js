import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { isEmpty } from 'lodash';

import {
  NavTitleBackHeader,
  TouchableX,
  QRCodeScannerModal,
  BlueButton,
} from '@/components';
import { useTranslation, useAppContext } from '@/hooks';
import { Colors, actuatedNormalize } from '@/themes';
import {
  SUPPORTED_COINS,
  showErrorToast,
  showSuccessToast,
  Routes,
} from '@/common';
import { NavigationService } from '@/services';

import styles from './styles';

export const AddContactScreen = ({ route }) => {
  const coin = route.params?.coin;
  const isEdit = route.params?.isEdit;
  const addressId = route.params?.addressId;

  const { t } = useTranslation();
  const {
    onAddContact,
    onUpdateContact,
    onDeleteContact,
    listAddress,
  } = useAppContext();

  const [name, setName] = useState(null);
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [showQRCodeScan, setShowQRCodeScan] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    if (isEdit) {
      setTitle(t('edit_contact'));
      const existingCoin = listAddress.find((item) => item.id === addressId);
      if (existingCoin) {
        setName(existingCoin.name);
        setWalletAddress(existingCoin.walletAddress);
      }
    } else {
      setTitle(t('add_contact'));
    }
  }, [isEdit, addressId]);

  useEffect(() => {
    if (coin) {
      const existingCoin = SUPPORTED_COINS.find((item) => item.id === coin);

      if (existingCoin) {
        setSelectedCoin(existingCoin);
      }
    }
  }, [coin]);

  const onShowQRCodeScan = () => {
    setShowQRCodeScan(true);
  };

  const onScanQRCodeSuccess = (data) => {
    setWalletAddress(data);
    setShowQRCodeScan(false);
  };

  const onSave = () => {
    let errorMessage = null;
    if (isEmpty(name)) {
      errorMessage = t('invalid_name');
    } else if (isEmpty(walletAddress)) {
      errorMessage = t('invalid_address');
    }

    if (errorMessage) {
      showErrorToast(errorMessage);
      return;
    }

    const contact = {
      id: isEdit ? addressId : Date.now() / 1000,
      coinId: selectedCoin.id,
      name: name,
      walletAddress: walletAddress,
    };

    if (isEdit) {
      onUpdateContact(contact);
      showSuccessToast(t('update_contact_success_msg'));
    } else {
      onAddContact(contact);
      showSuccessToast(t('add_contact_success_msg'));
    }

    NavigationService.goBack();
  };

  const onDelete = () => {
    onDeleteContact({ id: addressId });
    showSuccessToast(t('delete_contact_success_msg'));
    NavigationService.goBack();
  };

  const onTransfer = () => {
    NavigationService.navigate(Routes.TRANSFER_TO, {
      coin: selectedCoin,
      receveAddress: walletAddress,
    });
  };

  const isAvailableTransfers = () => {
    if (
      coin === 'vndt' ||
      coin === 'usdf' ||
      coin === 'cent' ||
      coin === 'xeng'
    ) {
      return true;
    }

    return false;
  };

  return (
    <View style={styles.container}>
      <NavTitleBackHeader
        containerStyle={styles.navHeader}
        title={title ?? ''}
      />
      <KeyboardAwareScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentScrollContainer}>
        <Text style={styles.title}>{t('selected_coin').toUpperCase()}</Text>
        <View style={styles.inputContainer}>
          <View style={styles.leftContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor={Colors.GREY}
              placeholder={selectedCoin ? selectedCoin.name : ''}
              editable={false}
            />
          </View>
        </View>
        <Text style={styles.title}>{t('name').toUpperCase()}</Text>
        <View style={styles.inputContainer}>
          <View style={styles.leftContainer}>
            <TextInput
              style={styles.input}
              placeholderTextColor={Colors.GREY}
              onChangeText={(value) => setName(value)}
              value={name}
            />
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
              autoCapitalize="none"
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
        {!isEdit && (
          <BlueButton
            title={t('save').toUpperCase()}
            containerStyle={styles.saveButton}
            onPress={onSave}
          />
        )}
        {isEdit && (
          <View style={styles.rowButtons}>
            <BlueButton
              title={t('delete').toUpperCase()}
              containerStyle={[
                styles.saveButton,
                { width: undefined, flex: 1, marginRight: 5 },
              ]}
              onPress={onDelete}
              activeBackgroundColor={Colors.RED}
            />
            <BlueButton
              title={t('save').toUpperCase()}
              containerStyle={[
                styles.saveButton,
                { width: undefined, flex: 1, marginLeft: 5 },
              ]}
              onPress={onSave}
            />
          </View>
        )}
        {isEdit && isAvailableTransfers() && (
          <BlueButton
            title={t('transfer').toUpperCase()}
            containerStyle={[styles.saveButton, { marginTop: 10 }]}
            onPress={onTransfer}
            activeBackgroundColor={Colors.SKY_BLUE}
          />
        )}
      </KeyboardAwareScrollView>
      <QRCodeScannerModal
        isVisible={showQRCodeScan}
        onSuccess={onScanQRCodeSuccess}
        onDismiss={() => setShowQRCodeScan(false)}
      />
    </View>
  );
};
