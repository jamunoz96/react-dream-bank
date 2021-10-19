import React, { useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { StaticContext } from "react-router";
import { useSelector } from "react-redux";
import Loading from "../Commons/Loading";
import { AppState } from "src/redux/types/AppState";
import { globalDispatch } from "src/redux/utils/globalDispatch";
import { getTransactions, resetTransactions } from "src/redux/actions/TransactionActions";
import { parseTimeToDate } from "src/utils/dates";
import MainAccount from "./MainAccount";
import icon from "src/assets/icons/right-arrow.png";
import { LocationStateAccount } from "src/types/types";


const Detail = ({location : { state: { account } } } : RouteComponentProps<{}, StaticContext, LocationStateAccount> ) => {
    const { transactions, errorMessage, isLoading} = useSelector((state : AppState) => state.transaction);
    useEffect(() => {
        globalDispatch(getTransactions(account.id));
        return (() => {
            globalDispatch(resetTransactions());
        })
    }, []);

    return <div className="transactions">
        
        <MainAccount {...account} />

        <div className="transaction-list">
            <div className="bb">
                <h4 className="text-blue">Last Transations</h4>
            </div>
            <table>
                <thead>
                    <tr>
                        <td width="6%"><br /></td>
                        <th className="text-blue">Date</th>
                        <th className="text-blue">Description</th>
                        <th className="text-blue">Currency</th>
                        <th className="text-blue">Value</th>
                        <th className="text-blue">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map((transaction: any) => {
                            return <tr key={transaction.id}>
                                <td>
                                    <Link to={{ pathname: account.id + "/transaction/" + transaction.id, state: { account: account, transaction: transaction } }} >
                                        <img className="icon" src={icon} alt="" />
                                    </Link>
                                </td>
                                <td>{parseTimeToDate(transaction.date)}</td>
                                <td>{transaction.description}</td>
                                <td>{transaction.currency}</td>
                                <td>{transaction.value}</td>
                                <td>{transaction.balance}</td>
                            </tr>
                        })
                    }
                    {
                        !transactions.length && !isLoading && !errorMessage &&
                        <tr>
                            <td colSpan={5}>No data</td>
                        </tr>
                    }
                </tbody>
            </table>

            {
                isLoading ? <Loading title="Transactions" /> : errorMessage
            }

        </div>

    </div>
}

export default Detail
