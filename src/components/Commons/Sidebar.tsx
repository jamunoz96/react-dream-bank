import React from "react"
import { logoutAction } from "src/redux/actions/AuthActions"
import { globalDispatch } from "src/redux/utils/globalDispatch"
import logo from "../../assets/images/logo.png"
import poweroff from "../../assets/icons/power-off.png"
import { Link, useLocation } from "react-router-dom"

const Sidebar = () => {
    const { pathname } = useLocation();
    const handleLogout = () => globalDispatch(logoutAction());
    return <div className="sidebar">
        <div className="menu">
            <img className="coin-logo" src={logo} alt="" />
            <h4>Accounts</h4>
            <ul>
                <li className="active">
                    <Link to="summary">Account Summary</Link>
                </li>
                <li>
                    <Link to="all">Accounts</Link>
                </li>
            </ul>
            <h4>Transactions</h4>
            <ul>
                <li>Inquire Transactions</li>
                <li>Fund Transfer</li>
                <li>Bill Payments</li>
            </ul>
        </div>
        <div className="logout">
            <img src={poweroff} alt="" onClick={handleLogout} />
        </div>
    </div>
}

export default React.memo(Sidebar)