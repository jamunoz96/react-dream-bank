import { useEffect } from "react";
import { getTransactions } from "../../redux/actions/TransactionActions";
import TransactionStore from "../../redux/types/TransactionStore";
import { globalDispatch } from "../../redux/utils/globalDispatch";
import icon from "../../assets/icons/in.png";

const Transactions = ({ transactions } : any ) => {
    const { isLoading, errorMessage, data } : TransactionStore = transactions;
    useEffect(() => {
        globalDispatch(getTransactions());
    }, []);

    return <div className="transactions">
        <div className="main-account">
            <b>37847387**** - MAENGUNE</b>
            <img className="icon" src={icon} alt="" />
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
                isLoading ? "Loading transactions..." : errorMessage
            }
        </div>

    </div>
}

export default Transactions