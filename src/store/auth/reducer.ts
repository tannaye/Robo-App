import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  VERIFY_LOGIN,
} from "store/auth/constants";

const initialState = {
  error: "",
  apiError: null,
  loading: false,
  otp_data: {},
  user_token: null,
  user_data: null,
};

const login = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
        loading: true,
        error: "",
      };
      break;

    case LOGIN_SUCCESS:
      state = {
        ...state,
        user_token: action.payload.jwt_token,
        user_data: action.payload.user,
        loading: false,
      };
      break;

    case VERIFY_LOGIN:
      state = {
        ...state,
        otp_data: action.payload,
        loading: false,
      };
      break;

    case LOGOUT_USER:
      state = { ...state };
      break;

    case LOGOUT_USER_SUCCESS:
      state = { ...state };
      break;

    case API_ERROR:
      state = { ...state, error: action.payload, loading: false };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default login;
