import React from 'react';
import { View } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NavTitleBackHeader } from '@/components';
import { useTranslation } from '@/hooks';
import { Colors } from '@/themes';
import { Routes } from '@/common';

import { AgentScreen } from './agent';
import { DepositCrytoScreen } from './cryto';
import styles from './styles';

const Tab = createMaterialTopTabNavigator();

export const DepositVndtScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <NavTitleBackHeader
        containerStyle={styles.navHeader}
        title={`${t('tab_deposit')} VNDT`}
      />
      <View style={styles.contentContainer}>
        <Tab.Navigator
          backBehavior="none"
          tabBarOptions={{
            style: {
              marginTop: 1,
              backgroundColor: Colors.SECONDARY,
              borderTopColor: Colors.PRIMARY,
            },
            labelStyle: styles.labelStyle,
            activeTintColor: Colors.WHITE,
          }}>
          <Tab.Screen
            name={Routes.DEPOSIT_AGENT}
            component={AgentScreen}
            options={{ tabBarLabel: t('agent_of_acwallet') }}
          />
          <Tab.Screen
            name={Routes.DEPOSIT_CRYTO}
            component={DepositCrytoScreen}
            initialParams={{ coinName: 'VNCOIN', coinId: 'vndt' }}
            options={{ tabBarLabel: t('cryto_currency_wallet') }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
};
