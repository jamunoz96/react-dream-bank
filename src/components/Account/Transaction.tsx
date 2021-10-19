import { RouteComponentProps, StaticContext, useHistory } from "react-router";
import { LocationStateTransaction } from "src/types/types";
import { parseTimeToDate } from "src/utils/dates";
import MainAccount from "./MainAccount";

const Transaction = ({ location: { state: { account, transaction } } }: RouteComponentProps<{}, StaticContext, LocationStateTransaction>) => {
    let history = useHistory();
    return <div className="transactions">
        <MainAccount {...account} />
        <div className="transaction-list">
            <div className="bb">
                <h4 className="text-blue">Transation</h4>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Date</td>
                        <td>{parseTimeToDate(transaction.date)}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{transaction.description}</td>
                    </tr>
                    <tr>
                        <td>Currency</td>
                        <td>{transaction.currency}</td>
                    </tr>
                    <tr>
                        <td>Value</td>
                        <td>{transaction.value}</td>
                    </tr>
                    <tr>
                        <td>Balance</td>
                        <td>{transaction.balance}</td>
                    </tr>
                </tbody>
            </table>
            <br />
            <button type="button" className="btn-line color-black" onClick={() => history.goBack()} >
                Back
            </button>
        </div>

    </div>
}

export default Transaction;