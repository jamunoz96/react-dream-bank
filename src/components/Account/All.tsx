import React, { useEffect } from "react";
import { getTransactions } from "src/redux/actions/TransactionActions";
import { globalDispatch } from "src/redux/utils/globalDispatch";
import { useSelector } from "react-redux";
import { AppState } from "src/redux/types/AppState";
import Loading from "../Commons/Loading";

const All = () => {

    const {data, errorMessage, isLoading} = useSelector((state : AppState) => state.transactions);
    useEffect(() => {
        if(!data.length && !errorMessage && !isLoading) {
            globalDispatch(getTransactions());
        }
    }, [data, errorMessage, isLoading]);

    return <div className="transactions">
        {
            isLoading ? <Loading title="Transactions" /> : errorMessage
        }
    </div>
}

export default All