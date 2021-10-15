import AuthStore from "../types/AuthStore";

export const LOADING = 'auth/LOADING';
export const LOGIN = 'auth/LOGIN';
export const LOGOUT = 'auth/LOGOUT';
export const GET_USER = 'auth/GET_USER';
export const REQUEST_ERROR = 'auth/REQUEST_ERROR';

const token : string | null = localStorage.getItem("auth_token") || null;
const getUser = () : object => {
  const user : string = localStorage.getItem("auth_user") || "{}";
  return JSON.parse(user);
};

const initialState : AuthStore = {
  user: getUser(),
  token: token,
  errorMessage: null,
  isLoading: false
};

const AuthReducer = (state = initialState, action: any) : AuthStore => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
        errorMessage: null
      }
    case LOGIN:
      localStorage.setItem("auth_token", action.payload.token);
        return {
          ...state,
          token: action.payload.token,
          user: null,
          errorMessage: null,
          isLoading: false
        };
    case GET_USER:
      localStorage.setItem("auth_user", JSON.stringify(action.payload.user));
      return {
        ...state,
        user: action.payload.user,
        isLoading: false
      };
    case LOGOUT:
      localStorage.removeItem("auth_token");
      localStorage.removeItem("auth_user");
      return {
        ...state,
        token: null,
        user: null,
        errorMessage: null,
        isLoading: false
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

export default AuthReducer;
