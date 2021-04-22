import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

const AppStateContext = React.createContext();

export const AppContextProvider = (props) => {
  const {
    //Account
    checkLogin,
    login,
    register,
    forgotPassword,
    checkShowOnboarding,
    forceLogout,
    checkStoreCookie,
    confirmLogin,
    resendVerifyEmail,

    //User
    getUserWallets,
    searchUsers,
    getAccountInfo,
    updateHidePrice,

    //System
    getCoinRates,
    getSystemAgencies,
    getTransactionCoinFee,

    //Transaction
    withdrawMoney,
    exchangeSell,
    exchangeBuy,
    confirmWithdraw,
    exchangeBuyConfirm,
    exchangeSellConfirm,
    getTransactionHistory,

    //AddressBook
    onAddContact,
    onUpdateContact,
    onDeleteContact,

    //Security
    changePassword,
    updateAuthenTypeStep1,
    updateAuthenTypeStep2,

    //Giftcode
    getListGiftcode,
    createGiftCode,
    scanGiftCode,
    validateGiftCode,
    getHistoryGiftcodeReceive,
  } = useStoreActions((actions) => {
    const {
      user,
      account,
      transaction,
      security,
      system,
      addressBook,
      giftcode,
    } = actions;
    return {
      //Account
      checkLogin: account.checkLogin,
      login: account.login,
      register: account.register,
      forgotPassword: account.forgotPassword,
      checkShowOnboarding: account.checkShowOnboarding,
      forceLogout: account.forceLogout,
      checkStoreCookie: account.checkStoreCookie,
      confirmLogin: account.confirmLogin,
      resendVerifyEmail: account.resendVerifyEmail,

      //User
      getUserWallets: user.getUserWallets,
      searchUsers: user.searchUsers,
      getAccountInfo: user.getAccountInfo,
      updateHidePrice: user.updateHidePrice,

      //System
      getCoinRates: system.getCoinRates,
      getSystemAgencies: system.getSystemAgencies,
      getTransactionCoinFee: system.getTransactionCoinFee,

      //Transaction
      withdrawMoney: transaction.withdrawMoney,
      exchangeBuy: transaction.exchangeBuy,
      exchangeSell: transaction.exchangeSell,
      confirmWithdraw: transaction.confirmWithdraw,
      exchangeBuyConfirm: transaction.exchangeBuyConfirm,
      exchangeSellConfirm: transaction.exchangeSellConfirm,
      getTransactionHistory: transaction.getTransactionHistory,

      //AddressBook
      onAddContact: addressBook.onAddContact,
      onUpdateContact: addressBook.onUpdateContact,
      onDeleteContact: addressBook.onDeleteContact,

      //Security
      changePassword: security.changePassword,
      updateAuthenTypeStep1: security.updateAuthenTypeStep1,
      updateAuthenTypeStep2: security.updateAuthenTypeStep2,

      //Giftcode
      getListGiftcode: giftcode.getListGiftcode,
      createGiftCode: giftcode.createGiftCode,
      scanGiftCode: giftcode.scanGiftCode,
      validateGiftCode: giftcode.validateGiftCode,
      getHistoryGiftcodeReceive: giftcode.getHistoryGiftcodeReceive,
    };
  });

  const appState = useStoreState((store) => store.account.appState);
  const shouldShowOnboarding = useStoreState(
    (store) => store.account.shouldShowOnboarding,
  );
  const userWallets = useStoreState((store) => store.user.userWallets);
  const accountInfo = useStoreState((store) => store.user.accountInfo);
  const isHidePrice = useStoreState((store) => store.user.isHidePrice);

  const coinRates = useStoreState((store) => store.system.coinRates);
  const systemAgencies = useStoreState((store) => store.system.systemAgencies);
  const coinFee = useStoreState((store) => store.system.coinFee);

  const listAddress = useStoreState((store) => store.addressBook.listAddress);

  const giftcodes = useStoreState((store) => store.giftcode.giftcodes);
  const history = useStoreState((store) => store.giftcode.history);

  const transactionHistory = useStoreState(
    (store) => store.transaction.transactionHistory,
  );
  const exchangeHistory = useStoreState(
    (store) => store.transaction.exchangeHistory,
  );

  return (
    <AppStateContext.Provider
      value={{
        appState,

        //Account
        shouldShowOnboarding,
        checkLogin,
        login,
        register,
        forgotPassword,
        checkShowOnboarding,
        forceLogout,
        checkStoreCookie,
        confirmLogin,
        resendVerifyEmail,

        //User
        userWallets,
        getUserWallets,
        searchUsers,
        getAccountInfo,
        accountInfo,
        isHidePrice,
        updateHidePrice,

        //System
        coinRates,
        getCoinRates,
        systemAgencies,
        getSystemAgencies,
        getTransactionCoinFee,
        coinFee,

        //Transaction
        withdrawMoney,
        exchangeBuy,
        exchangeSell,
        confirmWithdraw,
        exchangeBuyConfirm,
        exchangeSellConfirm,
        getTransactionHistory,
        transactionHistory,
        exchangeHistory,

        //AddressBook
        listAddress,
        onAddContact,
        onUpdateContact,
        onDeleteContact,

        //Security
        changePassword,
        updateAuthenTypeStep1,
        updateAuthenTypeStep2,

        //Giftcode
        getListGiftcode,
        giftcodes,
        createGiftCode,
        scanGiftCode,
        validateGiftCode,
        getHistoryGiftcodeReceive,
        history,
      }}>
      {props.children}
    </AppStateContext.Provider>
  );
};

export default AppStateContext;
