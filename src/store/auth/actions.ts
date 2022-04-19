import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  VERIFY_USER_LOGIN,
  VERIFY_LOGIN,
} from "store/auth/constants";
import { IUserSignin } from "store/auth/types";

export const loginUser = (user: IUserSignin, history: any) => {
  return {
    type: LOGIN_USER,
    payload: { user, history },
  };
};

export const loginSuccess = (user: IUserSignin) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const verifyLogin = (response: any) => {
  return {
    type: VERIFY_LOGIN,
    payload: response,
  };
};

export const verifyUserLogin = (verify_payload: any) => {
  return {
    type: VERIFY_USER_LOGIN,
    payload: { verify_payload },
  };
};

export const logoutUser = (history: any) => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  };
};

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  };
};

export const apiError = (error: any) => {
  return {
    type: API_ERROR,
    payload: error,
  };
};
