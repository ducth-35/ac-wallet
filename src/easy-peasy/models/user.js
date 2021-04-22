import { action, thunk } from 'easy-peasy';

import { STATUS } from '@/common';
import { UserApi } from '@/services';

import BaseModel from './base';

const getUserWallets = thunk(
  async (actions, payload, { dispatch, injections }) => {
    actions.updateStatus(STATUS.FETCHING);
    const res = await UserApi.getUserWallets();
    actions.updateStatus(res.isSuccess);

    if (res.isSuccess) {
      actions.updateUserWallets(res.data);
    }

    return res;
  },
);

const searchUsers = thunk(
  async (actions, payload, { dispatch, injections }) => {
    actions.updateStatus(STATUS.FETCHING);
    const res = await UserApi.searchUsers(payload);
    actions.updateStatus(res.isSuccess);

    return { status: res.isSuccess, data: res.data };
  },
);

const getAccountInfo = thunk(
  async (actions, payload, { dispatch, injections }) => {
    actions.updateStatus(STATUS.FETCHING);
    const res = await UserApi.getAccountInfo();
    actions.updateStatus(res.isSuccess);

    if (res.isSuccess) {
      actions.updateAccountInfo(res.data);
    }

    return { status: res.isSuccess, data: res.data };
  },
);

const UserModel = {
  ...BaseModel(),
  userWallets: null,
  accountInfo: null,
  isHidePrice: false,
  updateHidePrice: action((state, payload) => {
    state.isHidePrice = payload;
  }),
  updateUserWallets: action((state, payload) => {
    state.userWallets = payload;
  }),
  updateAccountInfo: action((state, payload) => {
    state.accountInfo = payload;
  }),
  getUserWallets,
  searchUsers,
  getAccountInfo,
};

export default UserModel;
