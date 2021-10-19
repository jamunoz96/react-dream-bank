import TransactionStore from "../types/TransactionStore";
import { LOGOUT } from "./AuthReducer";

export const LOAD_TRANSACTIONS = 'transaction/LOAD_TRANSACTIONS';
export const ADD_TRANSACTION = 'transaction/ADD_TRANSACTION';
export const LOADING = 'transaction/LOADING';
export const REQUEST_ERROR = 'transaction/REQUEST_ERROR';

const initialState : TransactionStore = {
  transactions: [],
  errorMessage: null,
  isLoading: false
};

const TransactionReducer = (state = initialState, action: any) : TransactionStore => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      }
    case LOAD_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload.data,
        isLoading: false,
        errorMessage: null
      };
    case ADD_TRANSACTION:
      return {
        ...state,
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

export default TransactionReducer;
