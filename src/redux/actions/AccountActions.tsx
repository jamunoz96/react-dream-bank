import { apiAddAccount, apiGetAccounts } from '../../services/Account';
import { ADD_ACCOUNT, LOADING, LOAD_ACCOUNTS, REQUEST_ERROR } from '../reducers/AccountReducer';
import { AppDispatch } from '../types/AppDispatch';

const _LOAD_ACCOUNTS = (data: [] ) => ({
    type: LOAD_ACCOUNTS,
    payload: {
        data
    }
});

const _ADD_ACCOUNT = (data: object ) => ({
    type: ADD_ACCOUNT,
    payload: {
        data
    }
});

const _LOADING = () => ({
    type: LOADING
});

const _REQUEST_ERROR = ({ response: { data: { error = "Error"} } })  => ({
    type: REQUEST_ERROR,
    payload: {
        error
    }
});


export const getAccounts = () => (dispatch: AppDispatch, getState: any) => {
        dispatch(_LOADING());
        const { user: { id } } = getState().auth;
        apiGetAccounts(id)
            .then((res : any) => dispatch(_LOAD_ACCOUNTS(res.data)))
            .catch(error => dispatch(_REQUEST_ERROR(error)));
};

export const addAccount = (form : object) => (dispatch: AppDispatch, getState: any) => {
        dispatch(_LOADING());
        const { user: { id } } = getState().auth;
        apiAddAccount(id, form)
            .then((res : any) => dispatch(_ADD_ACCOUNT(res.data)))
            .catch(error => dispatch(_REQUEST_ERROR(error)));
};
