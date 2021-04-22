import { isEmpty } from 'lodash';

export const validateEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm.test(email);
};

export const validatePassword = (password) => {
  return !isEmpty(password);
};

export const validateName = (name) => {
  return !isEmpty(name);
};
