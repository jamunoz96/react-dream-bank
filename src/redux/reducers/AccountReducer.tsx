import AccountStore from "../types/AccountStore";
import { LOGOUT } from "./AuthReducer";

export const LOAD_ACCOUNTS = 'account/LOAD_ACCOUNTS';
export const LOADING = 'account/LOADING';
export const ADD_ACCOUNT = 'account/ADD_ACCOUNT';
export const REQUEST_ERROR = 'account/REQUEST_ERROR';

const initialState : AccountStore = {
  accounts: [],
  errorMessage: null,
  isLoading: false,
  loaded: false
};

const AccountReducer = (state = initialState, action: any) : AccountStore => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      }
    case LOAD_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload.data,
        isLoading: false,
        errorMessage: null,
        loaded: true
      };
    case ADD_ACCOUNT:
      return {
        ...state,
        accounts: [...state.accounts, action.payload.data],
        isLoading: false,
        errorMessage: null
      };
    case LOGOUT:
      return initialState;
    case REQUEST_ERROR:
      return {
        ...state,
        errorMessage: action.payload.error,
        isLoading: false
      };
    default:
      return state;
  }
};

export default AccountReducer;
