import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  RedeemScreen,
  AddressBookScreen,
  GifcodeManagerScreen,
} from '@/containers';
import {
  ICO_TAB_HOME,
  ICO_TAB_HOME_SELECTED,
  ICO_TAB_QRCODE,
  ICO_TAB_ADDRESS_BOOK,
  ICO_TAB_ADDRESS_BOOK_SELECTED,
  Routes,
} from '@/common';
import { actuatedNormalize, Colors, FontFamily } from '@/themes';
import { useTranslation } from '@/hooks';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName={Routes.HOME}
      backBehavior={'none'}
      tabBarOptions={{
        style: {
          height: actuatedNormalize(50),
          backgroundColor: Colors.SECONDARY,
          borderTopColor: Colors.PRIMARY,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 10,
          elevation: 5,
        },
        labelStyle: styles.labelStyle,
        tabStyle: {
          height: actuatedNormalize(50),
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? ICO_TAB_HOME_SELECTED : ICO_TAB_HOME}
              style={[
                styles.tabBarIcon,
                {
                  width: actuatedNormalize(24),
                  height: actuatedNormalize(24),
                },
              ]}
              resizeMode="contain"
            />
          ),
          tabBarLabel: t('tab_home'),
        }}
        name={Routes.HOME}
        component={HomeScreen}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={ICO_TAB_QRCODE}
              style={[
                styles.tabBarIcon,
                {
                  marginTop: -actuatedNormalize(15),
                  width: actuatedNormalize(45),
                  height: actuatedNormalize(45),
                },
              ]}
              resizeMode="contain"
            />
          ),
          tabBarLabel: t('giftcode'),
        }}
        name={Routes.GIFTCODE}
        component={GifcodeManagerScreen}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused ? ICO_TAB_ADDRESS_BOOK_SELECTED : ICO_TAB_ADDRESS_BOOK
              }
              style={[
                styles.tabBarIcon,
                {
                  width: actuatedNormalize(24),
                  height: actuatedNormalize(24),
                },
              ]}
              resizeMode="contain"
            />
          ),
          tabBarLabel: t('tab_address_book'),
        }}
        name={Routes.ADDRESS_BOOK}
        component={AddressBookScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarIcon: {
    marginTop: 20,
    marginBottom: 10
  },

  labelStyle: {
    fontFamily: FontFamily.TitilliumWeb.SemiBold,
    fontSize: actuatedNormalize(12),
  },
});
