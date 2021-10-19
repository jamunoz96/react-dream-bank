import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AccountReducer from './AccountReducer';
import TransactionReducer from './TransactionReducer';

const RootReducer = combineReducers({ 
    auth: AuthReducer,
    account: AccountReducer,
    transaction: TransactionReducer,
})

export default RootReducer;