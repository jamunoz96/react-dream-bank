import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getTransactions } from "src/redux/actions/TransactionActions";
import { globalDispatch } from "src/redux/utils/globalDispatch";
import icon from "src/assets/icons/in.png";
import Loading from "../Commons/Loading";
import { useSelector } from "react-redux";
import { AppState } from "src/redux/types/AppState";

const Summary = () => {
    
    const {data, errorMessage, isLoading} = useSelector((state : AppState) => state.transactions);
    useEffect(() => {
        if(!data.length && !errorMessage && !isLoading) {
            globalDispatch(getTransactions());
        }
    }, [data, errorMessage, isLoading]);

    return <div className="transactions">
        <div className="main-account">
            <b>37847387**** - MAENGUNE</b>
            <Link to="/account/all">
                <img className="icon" src={icon} alt="" />
            </Link>
        </div>

        <div className="transaction-list">
            <div className="bb">
                <h4 className="text-blue">Last Transations</h4>
            </div>
            <table>
                <thead>
                    <tr>
                        <th className="text-blue">Date</th>
                        <th className="text-blue">Description</th>
                        <th className="text-blue">Currency</th>
                        <th className="text-blue">Value</th>
                        <th className="text-blue">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((transaction: any) => {
                            return <tr key={transaction.id}>
                                <td>{transaction.id}</td>
                                <td>{transaction.name}</td>
                                <td>{transaction.year}</td>
                                <td>{transaction.color}</td>
                                <td>{transaction.pantone_value}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            {
                isLoading ? <Loading title="Transactions" /> : errorMessage
            }
        </div>

    </div>
}

export default Summary