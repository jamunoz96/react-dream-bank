import { apiGetTransactions } from '../../services/Transaction';
import { LOAD, LOADING, REQUEST_ERROR } from '../reducers/TransactionReducer';
import { AppDispatch } from '../types/AppDispatch';

const _LOAD = (data: object ) => ({
    type: LOAD,
    payload: {
        data
    }
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


export const getTransactions = () => (dispatch: AppDispatch) => {
        dispatch(_LOADING());
        apiGetTransactions()
            .then((res : any) => dispatch(_LOAD(res.data)))
            .catch(error => dispatch(_REQUEST_ERROR(error)));
    
};
