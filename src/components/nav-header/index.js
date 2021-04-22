import React from 'react';
import { View, Text, Image } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';

import {
  ICO_ARROW_BACK,
  ICO_MENU,
  ICO_ARROW_DOWN,
  Routes,
  DEFAULT_AVATAR,
} from '@/common';
import TouchableX from '../touchable';
import { NavigationService } from '@/services';
import { actuatedNormalize, Colors } from '@/themes';
import { useTranslation, useAppContext } from '@/hooks';

import styles from './styles';

export const NavTitleHeader = ({
  title,
  containerStyle = {},
  rightContainer = null,
  leftContainer = null,
}) => {
  return (
    <View style={[styles.titleBackcontainer, containerStyle]}>
      {leftContainer ? leftContainer : null}

      <Text style={[styles.title, { marginLeft: actuatedNormalize(20) }]}>
        {title}
      </Text>
      {rightContainer ? rightContainer : null}
    </View>
  );
};

export const NavTitleBackHeader = ({
  title,
  onPress,
  containerStyle = {},
  rightContainer = null,
}) => {
  return (
    <View style={[styles.titleBackcontainer, containerStyle]}>
      <Image style={styles.icon} source={ICO_ARROW_BACK} resizeMode="contain" />
      <TouchableX
        style={styles.leftBtn}
        onPress={() => {
          NavigationService.goBack();
          if (onPress) {
            onPress();
          }
        }}
      />
      <Text style={styles.title}>{title}</Text>
      {rightContainer ? rightContainer : null}
    </View>
  );
};

export const NavTitleDownHeader = ({ title, onPress, containerStyle = {} }) => {
  return (
    <View style={[styles.titleBackcontainer, containerStyle]}>
      <Image style={styles.icon} source={ICO_ARROW_DOWN} resizeMode="contain" />
      <TouchableX
        style={styles.leftBtn}
        onPress={() => {
          if (onPress) {
            onPress();
          }
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export const NavMenuHeader = ({ containerStyle = {} }) => {
  const { t } = useTranslation();
  const { accountInfo } = useAppContext();

  const onMenuPress = () => {
    NavigationService.navigate(Routes.SETTINGS);
  };

  const onHistoryPress = () => {
    NavigationService.navigate(Routes.HISTORY);
  };

  const onNotificationPress = () => {
    NavigationService.navigate(Routes.NOTIFICATION);
  };

  return (
    <View style={[styles.menuContainer, containerStyle]}>
      <TouchableX style={styles.menuButton} onPress={onMenuPress}>
        <View style={styles.avatarContainer}>
          <FastImage
            style={styles.avatar}
            resizeMode="contain"
            source={
              accountInfo?.avatar
                ? { uri: accountInfo?.avatar }
                : DEFAULT_AVATAR
            }
          />
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userTitle}>{t('hello')}</Text>
          <Text style={styles.userName}>{accountInfo?.name ?? ''}</Text>
        </View>
      </TouchableX>
      <View style={styles.rightContainer}>
        {/* <TouchableX style={styles.menuButton} onPress={onHistoryPress}>
          <FontAwesome
            name="history"
            color={Colors.GREY}
            size={actuatedNormalize(20)}
          />
        </TouchableX> */}
        {/* <TouchableX style={styles.menuButton} onPress={onNotificationPress}>
          <MaterialIcons
            name="notifications"
            color={Colors.GREY}
            size={actuatedNormalize(25)}
          />
        </TouchableX> */}
      </View>
    </View>
  );
};
