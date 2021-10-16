import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/redux/types/AppState";
import Balance from "src/components/Commons/Balance";
import Header from "src/components/Commons/Header";
import Sidebar from "src/components/Commons/Sidebar";
import RoutesNavigation from "src/routes/RoutesNavigation";
import { globalDispatch } from "src/redux/utils/globalDispatch";
import { getTransactions } from "src/redux/actions/TransactionActions";

const AppContainer = () => {
    
    const { auth, transactions : {data, errorMessage, isLoading} } = useSelector((state: AppState) => state);

    useEffect(() => {
        if(!data.length && !errorMessage && !isLoading) {
            globalDispatch(getTransactions());
        }
    }, [data, errorMessage, isLoading]);

    return <>
        <Sidebar />
        <div className="content">
            <Header {...auth} />
            <Balance {...auth} />
            <RoutesNavigation />
        </div>
    </>;
}

export default AppContainer;