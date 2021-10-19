import { apiAddTransaction, apiGetTransactions } from '../../services/Transaction';
import { ADD_TRANSACTION, LOADING, LOAD_TRANSACTIONS, REQUEST_ERROR } from '../reducers/TransactionReducer';
import { AppDispatch } from '../types/AppDispatch';

export const _LOAD_TRANSACTIONS = (data: [] ) => ({
    type: LOAD_TRANSACTIONS,
    payload: {
        data
    }
});

export const _ADD_TRANSACTION = () => ({
    type: ADD_TRANSACTION,
    payload: {}
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


export const getTransactions = (account : number) => (dispatch: AppDispatch, getState: any) => {
        dispatch(_LOADING());
        const { user: { id } } = getState().auth;
        apiGetTransactions(id, account)
            .then((res : any) => dispatch(_LOAD_TRANSACTIONS(res.data)))
            .catch(error => dispatch(_REQUEST_ERROR(error)));
};

export const addTransaction = (account : number, form: object) => (dispatch: AppDispatch, getState: any) => {
        dispatch(_LOADING());
        const { user: { id } } = getState().auth;
        apiAddTransaction(id, account, form)
            .then(() => dispatch(_ADD_TRANSACTION()))
            .catch(error => dispatch(_REQUEST_ERROR(error)));
};

export const resetTransactions = () => (dispatch: AppDispatch) => {
    dispatch(_LOAD_TRANSACTIONS([]));
};