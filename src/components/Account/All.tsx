import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/redux/types/AppState";
import Loading from "../Commons/Loading";

const All = () => {

    const {data, errorMessage, isLoading} = useSelector((state : AppState) => state.transactions);

    return <div className="transactions">
        <div className="transaction-list">
            <div className="bb">
                <h4 className="text-gray">ALL ACCOUNTS</h4>
            </div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-blue">Type</th>
                        <th className="text-blue">Account Name</th>
                        <th className="text-blue">Status</th>
                        <th className="text-blue">Currency</th>
                        <th className="text-blue">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.slice(0,2).map((transaction: any) => {
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

export default All