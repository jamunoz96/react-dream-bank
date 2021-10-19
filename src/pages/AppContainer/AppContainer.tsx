import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "src/redux/types/AppState";
import Balance from "src/components/Commons/Balance";
import Header from "src/components/Commons/Header";
import Sidebar from "src/components/Commons/Sidebar";
import RoutesNavigation from "src/routes/RoutesNavigation";

const AppContainer = () => {
    
    const { auth } = useSelector((state: AppState) => state);

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