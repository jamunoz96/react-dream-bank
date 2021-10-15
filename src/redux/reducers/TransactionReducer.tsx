import TransactionStore from "../types/TransactionStore";
import { LOGOUT } from "./AuthReducer";

export const LOADING = 'transaction/LOADING';
export const LOAD = 'transaction/LOAD';
export const REQUEST_ERROR = 'transaction/REQUEST_ERROR';


const initialState : TransactionStore = {
  page: 0,
  per_page: 10,
  total: 0,
  total_pages: 0,
  data: [],
  isLoading: false,
  errorMessage: null
};

const TransactionReducer = (state = initialState, action: any) : TransactionStore => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      }
    case LOAD:
      return {
        ...state,
        ...action.payload.data,
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
