import TransactionStore from "../types/TransactionStore";

export const LOADING = 'auth/LOADING';
export const LOAD = 'auth/LOAD';
export const REQUEST_ERROR = 'auth/REQUEST_ERROR';


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
        isLoading: true,
        errorMessage: null
      }
    case LOAD:
      return {
        ...state,
        ...action.payload.data,
        isLoading: false,
        errorMessage: null
      };
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
