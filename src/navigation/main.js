import React, { useRef, useEffect } from 'react';
import { AppState } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import {
  DepositVndtScreen,
  DepositCrytoScreen,
  TransferScreen,
  TransferForexScreen,
  SwapScreen,
  SettingsScreen,
  PincodeScreen,
  DepositScreen,
  WithdrawalScreen,
  WithdrawCoinScreen,
  SwapToScreen,
  TransferToScreen,
  AddContactScreen,
  ChangePasswordScreen,
  TwoFactorAuthenticationScreen,
  EnableAuthenticationScreen,
  CreateGiftCodeStep1,
  CreateGiftCodeStep2,
  ReceiveGiftcodeScreen,
  HistoryScreen,
  NotificationScreen,
} from '@/containers';
import { Routes } from '@/common';
import { NavigationService } from '@/services';

import { BottomTabs } from './bottom-tabs';

const Stack = createStackNavigator();

const MainStack = () => {
  const livecycleState = useRef(AppState.currentState);

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  const handleAppStateChange = (nextAppState) => {
    if (
      // livecycleState.current.match(/background/) &&
      nextAppState === 'background'
    ) {
      console.log('App has come to the foreground!');
      NavigationService.navigate(Routes.PIN_CODE, { needGoback: true });
    }

    livecycleState.current = nextAppState;
    console.log('AppState', livecycleState.current);
  };

  return (
    <Stack.Navigator headerMode="none" initialRouteName={Routes.PIN_CODE}>
      <Stack.Screen
        name={Routes.PIN_CODE}
        component={PincodeScreen}
        options={{
          animationEnabled: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen name={Routes.BOTTOM_TABS} component={BottomTabs} />
      <Stack.Screen name={Routes.DEPOSIT} component={DepositScreen} />
      <Stack.Screen name={Routes.DEPOSIT_VNDT} component={DepositVndtScreen} />
      <Stack.Screen
        name={Routes.DEPOSIT_CRYTO}
        component={DepositCrytoScreen}
      />
      <Stack.Screen name={Routes.WITHDRAWAL} component={WithdrawalScreen} />
      <Stack.Screen
        name={Routes.WITHDRAW_COIN}
        component={WithdrawCoinScreen}
      />
      <Stack.Screen name={Routes.TRANSFER} component={TransferScreen} />
      <Stack.Screen name={Routes.TRANSFER_TO} component={TransferToScreen} />

      <Stack.Screen
        name={Routes.TRANSFER_FOREX}
        component={TransferForexScreen}
      />
      <Stack.Screen name={Routes.SWAP} component={SwapScreen} />
      <Stack.Screen name={Routes.SWAP_TO} component={SwapToScreen} />
      <Stack.Screen
        name={Routes.SETTINGS}
        component={SettingsScreen}
        options={{ gestureDirection: 'horizontal-inverted' }}
      />
      <Stack.Screen name={Routes.ADD_CONTACT} component={AddContactScreen} />
      <Stack.Screen
        name={Routes.CHANGE_PASSWORD}
        component={ChangePasswordScreen}
      />
      <Stack.Screen
        name={Routes.TWO_FACTOR}
        component={TwoFactorAuthenticationScreen}
      />
      <Stack.Screen
        name={Routes.ENABLE_AUTHENTICATION}
        component={EnableAuthenticationScreen}
      />
      <Stack.Screen
        name={Routes.CREATE_GIFTCODE_STEP_1}
        component={CreateGiftCodeStep1}
      />
      <Stack.Screen
        name={Routes.CREATE_GIFTCODE_STEP_2}
        component={CreateGiftCodeStep2}
      />
      <Stack.Screen
        name={Routes.RECEIVE_GIFTCODE}
        component={ReceiveGiftcodeScreen}
      />
      <Stack.Screen name={Routes.NOTIFICATION} component={NotificationScreen} />
      <Stack.Screen name={Routes.HISTORY} component={HistoryScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
