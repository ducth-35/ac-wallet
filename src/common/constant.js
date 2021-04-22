import {
  ICO_CIRCLE_VNDT,
  ICO_CIRCLE_USDF,
  ICO_CIRCLE_BTC,
  ICO_CIRCLE_ETH,
  ICO_CIRCLE_USDT,
  ICO_CIRCLE_XRP,
  ICO_CIRCLE_XLM,
  ICO_CIRCLE_TRX,
  ICO_CIRCLE_XENG,
  ICO_CIRCLE_CENT,
} from './images';

export const TRANSACTION_TYPE = [
  {
    id: 'sell',
    value: 1,
  },
  {
    id: 'buy',
    value: 2,
  },
  {
    id: 'tab_withdrawal',
    value: 3,
  },
  {
    id: 'tab_deposit',
    value: 4,
  },
  {
    id: 'commission',
    value: 5,
  },
  {
    id: 'receive',
    value: 7,
  },
  {
    id: 'fee',
    value: 8,
  },
];

export const SWAP_TYPE = {
  BUY: 'BUY',
  SELL: 'SELL',
};

export const GIFTCODE_STATUS = [
  {
    id: 'error',
    value: -1,
    color: 'red',
  },
  {
    id: 'completed',
    value: 1,
    color: 'grey',
  },
  {
    id: 'creating',
    value: 2,
    color: 'orange',
  },
  {
    id: 'pending',
    value: 3,
    color: 'blue',
  },
];

export const GIFTCODE_CONDITIONS = [
  { id: 'public', value: '{"uid":"","pin":"","type":"public"}' },
  {
    id: 'password_required',
    value: '{"uid":"","pin":"","type":"private"}',
  },
  {
    id: 'authenticate_sender',
    value: '{"uid":"","pin":"","type":"fixedSender"}',
  },
  {
    id: 'recipients_indentified',
    value: '{"uid":"","pin":"","type":"fixedReceiver"}',
  },
];

export const SUPPORTED_GIFTCODE_COINS = [
  {
    id: 'cent',
    name: 'CENT',
    value: 0,
    icon: ICO_CIRCLE_CENT,
    order: 0,
    currencyCode: 16,
    networkFee: 'trx',
  },
  {
    id: 'usdf',
    name: 'USDForex',
    value: 0,
    icon: ICO_CIRCLE_USDF,
    order: 1,
    currencyCode: 14,
    networkFee: 'trx',
  },
  {
    id: 'vndt',
    name: 'VNCOIN',
    value: 0,
    icon: ICO_CIRCLE_VNDT,
    order: 2,
    currencyCode: 12,
    networkFee: 'trx',
  },
  {
    id: 'xeng',
    name: 'XENG',
    value: 0,
    icon: ICO_CIRCLE_XENG,
    order: 3,
    currencyCode: 15,
    networkFee: 'trx',
  },
];

export const SUPPORTED_COINS = [
  {
    id: 'btc',
    name: 'Bitcoin',
    value: 0,
    icon: ICO_CIRCLE_BTC,
    order: 0,
    currencyCode: 1,
    networkFee: 'btc',
  },
  {
    id: 'cent',
    name: 'CENT',
    value: 0,
    icon: ICO_CIRCLE_CENT,
    order: 1,
    currencyCode: 16,
    networkFee: 'trx',
  },
  {
    id: 'eth',
    name: 'Ethereum',
    value: 0,
    icon: ICO_CIRCLE_ETH,
    order: 2,
    currencyCode: 3,
    networkFee: 'eth',
  },
  {
    id: 'xrp',
    name: 'Ripple',
    value: 0,
    icon: ICO_CIRCLE_XRP,
    order: 3,
    currencyCode: 8,
    networkFee: 'xrp',
  },
  {
    id: 'xlm',
    name: 'Stellar',
    value: 0,
    icon: ICO_CIRCLE_XLM,
    order: 4,
    currencyCode: 10,
    networkFee: 'xlm',
  },
  {
    id: 'usdt',
    name: 'Tether',
    value: 0,
    icon: ICO_CIRCLE_USDT,
    order: 5,
    currencyCode: 14,
    networkFee: 'eth',
  },
  {
    id: 'trx',
    name: 'Tron',
    value: 0,
    icon: ICO_CIRCLE_TRX,
    order: 6,
    currencyCode: 11,
    networkFee: 'trx',
  },
  {
    id: 'usdf',
    name: 'USDForex',
    value: 0,
    icon: ICO_CIRCLE_USDF,
    order: 7,
    currencyCode: 14,
    networkFee: 'trx',
  },
  {
    id: 'vndt',
    name: 'VNCOIN',
    value: 0,
    icon: ICO_CIRCLE_VNDT,
    order: 8,
    currencyCode: 12,
    networkFee: 'trx',
  },
  {
    id: 'xeng',
    name: 'XENG',
    value: 0,
    icon: ICO_CIRCLE_XENG,
    order: 9,
    currencyCode: 15,
    networkFee: 'trx',
  },
];

export const APP_STATE = {
  ANONYMOUS: 'ANONYMOUS',
  LOGGED_IN: 'LOGGED_IN',
};

export const RESPONSE_CODES = {
  SUCCESS: 200,
  UPDATE_SUCCESS: 201,
  UNAUTHORIZED: 401,
};

export const STATUS = {
  SUCCESS: 'SUCCESS',
  NOT_STARTED: 'NOT_STARTED',
  FETCHING: 'FETCHING',
  FAILED: 'FAILED',
};

export const LOCALES = {
  ENGLISH: { id: 0, name: 'en', label: 'English' },
  VIETNAMESE: { id: 1, name: 'vn', label: 'Việt Nam' },
};

export const HIDEN_NUMBER = '******';

export const API_BASE_URL = 'https://login.acwallet.io/';

export const SHOW_ONBOARDING = 'SHOW_ONBOARDING';
export const STORE_PIN_CODE = 'STORE_PIN_CODE';
export const SESSION_TIMEOUT = 'SESSION_TIMEOUT';
export const STORE_COOKIE = 'STORE_COOKIE';
export const ENABLE_TOUCH_ID = 'ENABLE_TOUCH_ID';

export const GOOGLE_RECAPTRA = {
  SITE_KEY: '6LevAAcaAAAAAA1Y-oaOQxeqE_-S92gh3iQw78ul',
  DOMAIN: 'https://login.acwallet.io/',
};
