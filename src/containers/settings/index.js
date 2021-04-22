import React, { useState, useEffect } from 'react';
import { View, SectionList, Text, Image } from 'react-native';

import { NavTitleBackHeader, ToggleSwitch, TouchableX } from '@/components';
import { useAppContext, useTranslation } from '@/hooks';
import {
  ICO_FACE_ID,
  ICO_ARROW_RIGHT,
  ICO_CHANGE_PINCODE,
  ICO_CHANGE_PASSWORD,
  ICO_2_AUTHEN,
  ICO_LANGUAGE,
  ICO_LOGOUT,
  Routes,
  ENABLE_TOUCH_ID,
} from '@/common';
import { NavigationService } from '@/services';
import { Colors } from '@/themes';
import { showAlert, saveValue, getValue } from '@/utils';

import { ChangeLanguagePopup } from './languages-popup';
import styles from './styles';

const ItemType = {
  Select: 'select',
  Switch: 'switch',
};

export const SettingsScreen = () => {
  const { t, locale } = useTranslation();
  const { forceLogout, accountInfo } = useAppContext();

  const sections = [
    {
      title: t('security'),
      data: [
        {
          id: 'change_pincode',
          title: t('change_pincode'),
          type: ItemType.Select,
          leftIcon: ICO_CHANGE_PINCODE,
        },
        {
          id: 'change_password',
          title: t('change_password'),
          type: ItemType.Select,
          leftIcon: ICO_CHANGE_PASSWORD,
        },
        {
          id: 'touchid_face_id',
          title: t('touchid_face_id'),
          type: ItemType.Switch,
          leftIcon: ICO_FACE_ID,
          isOn: false,
        },
        {
          id: 'two_factor_authentication',
          title: t('two_factor_authentication'),
          type: ItemType.Switch,
          isOn: false,
          leftIcon: ICO_2_AUTHEN,
        },
      ],
    },

    {
      title: t('support'),
      data: [
        {
          id: 'languages',
          title: t('language'),
          type: ItemType.Select,
          leftIcon: ICO_LANGUAGE,
        },
        { id: 'logout', title: t('logout'), leftIcon: ICO_LOGOUT },
      ],
    },
  ];

  const [showLanguagesPopup, setShowLanguagesPopup] = useState(false);
  const [authenType, setAuthenType] = useState('none');
  const [settings, setSettings] = useState(sections);

  useEffect(() => {
    onCheckEnableTouchId();
  }, []);

  useEffect(() => {
    setAuthenType(accountInfo?.authen_type);
  }, [accountInfo]);

  useEffect(() => {
    onUpdateSettings({
      id: 'two_factor_authentication',
      value: authenType !== 'none' ? true : false,
    });
  }, [authenType, locale]);

  const onSelectedMenuItem = (item) => {
    switch (item.id) {
      case 'change_pincode':
        onShowChangePinCode();
        break;
      case 'change_password':
        onShowChangePassword();
        break;
      case 'logout':
        onConfirmLogout();
        break;
      case 'languages':
        onShowChangeLanguagePopup();
        break;
      default:
        console.log('Default');
    }
  };

  const onChangeToogleValueMenuItem = ({ item, value }) => {
    console.log('onChangeToogleValueMenuItem: ', item, value);
    switch (item.id) {
      case 'two_factor_authentication':
        onShowTwoFactorAuthentication();
        break;
      case 'touchid_face_id':
        onChangeSettingTouchId({ value });
        break;
      default:
        console.log('Default');
    }
  };

  const onCheckEnableTouchId = async () => {
    const result = await getValue(ENABLE_TOUCH_ID);

    onUpdateSettings({
      id: 'touchid_face_id',
      value: result ? JSON.parse(result) : false,
    });
  };

  const onChangeSettingTouchId = async ({ value }) => {
    const res = await saveValue(ENABLE_TOUCH_ID, JSON.stringify(value));

    if (res.success) {
      onUpdateSettings({ id: 'touchid_face_id', value: value });
    }
  };

  const onUpdateSettings = ({ id, value }) => {
    let updateSections = [...sections];
    updateSections.forEach((item, idx1) => {
      item.data.forEach((item2, idx2) => {
        if (item2.id === id) {
          item2.isOn = value;
        }
      });
    });

    setSettings(updateSections);
  };

  const onShowTwoFactorAuthentication = () => {
    NavigationService.navigate(Routes.TWO_FACTOR);
  };

  const onShowChangePinCode = () => {
    NavigationService.navigate(Routes.PIN_CODE, { isUpdate: true });
  };

  const onShowChangePassword = () => {
    NavigationService.navigate(Routes.CHANGE_PASSWORD);
  };

  const onShowChangeLanguagePopup = () => {
    setShowLanguagesPopup(true);
  };

  const onCloseLanguagesPopup = () => {
    setShowLanguagesPopup(false);
  };

  const onConfirmLogout = () => {
    showAlert({
      title: t('logout').toUpperCase(),
      message: t('confirm_logout_message'),
      acceptButtonTitle: t('logout'),
      cancelButtonTitle: t('cancel'),
      acceptAction: onLogout,
    });
  };

  const onLogout = () => {
    forceLogout();
  };

  const renderItems = ({ item }) => {
    return (
      <TouchableX
        style={styles.itemContainer}
        onPress={
          item.type === ItemType.Select
            ? () => {
                onSelectedMenuItem(item);
              }
            : null
        }>
        <View style={styles.leftContainer}>
          {item.leftIcon ? (
            <Image
              style={styles.leftIcon}
              source={item.leftIcon}
              resizeMode="contain"
            />
          ) : (
            <View style={styles.retangle} />
          )}
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
        {item.type === ItemType.Select ? (
          <Image
            style={styles.arrowIcon}
            source={ICO_ARROW_RIGHT}
            resizeMode="contain"
          />
        ) : item.type === ItemType.Switch ? (
          <ToggleSwitch
            isOn={item.isOn}
            size="small"
            onColor={Colors.BLUE}
            offColor={Colors.PRIMARY}
            onToggle={(value) => {
              onChangeToogleValueMenuItem({ item, value });
            }}
          />
        ) : null}
      </TouchableX>
    );
  };

  const renderHeader = ({ section: { title } }) => {
    return (
      <View style={styles.headerContainer}>
        {title && <Text style={styles.headerTitle}>{title}</Text>}
      </View>
    );
  };

  const renderItemSeparator = () => {
    return (
      <View style={styles.lineContainer}>
        <View style={styles.line} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <NavTitleBackHeader
        containerStyle={styles.navHeader}
        title={t('settings')}
      />
      <SectionList
        sections={settings}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItems}
        renderSectionHeader={renderHeader}
        ItemSeparatorComponent={renderItemSeparator}
        showsVerticalScrollIndicator={false}
      />
      {showLanguagesPopup && (
        <ChangeLanguagePopup onClose={onCloseLanguagesPopup} />
      )}
    </View>
  );
};
