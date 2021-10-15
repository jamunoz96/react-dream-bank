import { apiGetUser, apiLogin } from '../../services/Auth/';
import { GET_USER, LOADING, LOGIN, LOGOUT, REQUEST_ERROR } from '../reducers/AuthReducer';
import { AppDispatch } from '../types/AppDispatch';
import AuthStore from '../types/AuthStore';

const _LOGIN = (token: string ) => ({
    type: LOGIN,
    payload: {
        token
    }
});

const _USER = (user: object ) => ({
    type: GET_USER,
    payload: {
        user
    }
});

const _LOGOUT = () => ({
    type: LOGOUT
});

const _LOADING = () => ({
    type: LOADING
});

const _REQUEST_ERROR = ({ response: { data: { error = "Error"} } }) : any  => ({
    type: REQUEST_ERROR,
    payload: {
        error
    }
});

export const loginAction = (form : object) => (dispatch: AppDispatch) => {
    dispatch(_LOADING());
    apiLogin(form)
        .then((res : any)=> dispatch(_LOGIN(res.data.token)))
        .catch(error => dispatch(_REQUEST_ERROR(error)));
};

export const getUserAction = () => (dispatch: AppDispatch, getState: any) => {
    const { user } : AuthStore  = getState().auth;
    if(!user){
        dispatch(_LOADING());
        apiGetUser()
            .then((res : any) => dispatch(_USER(res.data.data)))
            .catch(error => dispatch(_REQUEST_ERROR(error)));
      
    } 
};

export const logoutAction = () => (dispatch: AppDispatch) => {
    dispatch(_LOGOUT());
};