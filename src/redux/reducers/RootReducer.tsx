import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TransactionReducer from './TransactionReducer';

const RootReducer = combineReducers({ 
    auth: AuthReducer,
    transactions: TransactionReducer,
})

export default RootReducer;