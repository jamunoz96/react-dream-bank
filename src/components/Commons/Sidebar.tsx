import React from "react"
import { logoutAction } from "src/redux/actions/AuthActions"
import { globalDispatch } from "src/redux/utils/globalDispatch"
import logo from "../../assets/images/logo.png"
import poweroff from "../../assets/icons/power-off.png"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
    const handleLogout = () => globalDispatch(logoutAction());
    return <div className="sidebar">
        <div className="menu">
            <img className="coin-logo" src={logo} alt="" />
            <h4>Accounts</h4>
            <ul>
                <li >
                    <NavLink activeClassName="active" exact to="/account/summary">Account Summary</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/account/detail">Accounts</NavLink>
                </li>
            </ul>
            <h4>Transactions</h4>
            <ul>
                <li>
                    <NavLink activeClassName="active" exact to="/">Inquire Transactions</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" exact to="/">Fund Transfer</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" exact to="/">Bill Payments</NavLink>
                </li>
            </ul>
        </div>
        <div className="logout">
            <img src={poweroff} alt="" onClick={handleLogout} />
        </div>
    </div>
}

export default React.memo(Sidebar)