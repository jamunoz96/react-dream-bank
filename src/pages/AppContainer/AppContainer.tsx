import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/redux/types/AppState";
import Balance from "src/components/Commons/Balance";
import Header from "src/components/Commons/Header";
import Sidebar from "src/components/Commons/Sidebar";
import RoutesNavigation from "src/routes/RoutesNavigation";

const AppContainer = () => {
    
    const { user } = useSelector((state: AppState) => state.auth);

    return <>
        <Sidebar />
        <div className="content">
            <Header user={user} />
            <Balance user={user} />
            <RoutesNavigation />
        </div>
    </>;
}

export default AppContainer;