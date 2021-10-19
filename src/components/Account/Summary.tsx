import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/redux/types/AppState";
import Loading from "../Commons/Loading";
import icon1 from 'src/assets/icons/pen.png'
import icon2 from 'src/assets/icons/savings.png'
import { globalDispatch } from "src/redux/utils/globalDispatch";
import { getAccounts } from "src/redux/actions/AccountActions";
import { encrypProduct } from "src/utils/text";
import { Link } from "react-router-dom";

const Summary = () => {

    const icons = [icon1, icon2];
    const {accounts, errorMessage, isLoading, loaded} = useSelector((state : AppState) => state.account);

    useEffect(() => {
        if(!loaded) globalDispatch(getAccounts());
    }, []);

    return <div className="transactions">
        <div className="transaction-list">
            <div className="bb">
                <h4 className="text-gray">ALL ACCOUNTS</h4>
            </div>
            <table>
                <thead>
                    <tr>
                        <td width="8%"><br /></td>
                        <th className="text-blue">Type</th>
                        <th className="text-blue">Account Name</th>
                        <th className="text-blue">Status</th>
                        <th className="text-blue">Currency</th>
                        <th className="text-blue">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        accounts.map((account: any, index : number) => {
                            return <tr key={account.id}>
                                <td>
                                    <Link to={{ pathname: 'detail/' + account.id, state: { account } }} >
                                        <img className="icon" src={icons[index%2]} alt="" />
                                    </Link>
                                </td>
                                <td>{account.name}</td>
                                <td>{ encrypProduct(account.number, account.product)}</td>
                                <td>{account.status}</td>
                                <td>{account.currency}</td>
                                <td>${account.income}</td>
                            </tr>
                        })
                    }
                    {
                        !accounts.length && !errorMessage && loaded &&
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

export default Summary