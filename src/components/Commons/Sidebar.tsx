import React from "react"
import coin from "../../assets/icons/coin.png"
import poweroff from "../../assets/icons/power-off.png"

const Sidebar = () => {
    return <div className="sidebar">
        <div className="menu">
            <img className="coin-logo" src={coin} alt="" />
            <h4>Accounts</h4>
            <ul>
                <li>Account Summary</li>
                <li>Accounts</li>
            </ul>
            <h4>Transactions</h4>
            <ul>
                <li>Inquire Transactions</li>
                <li>Fund Transfer</li>
                <li>Bill Payments</li>
            </ul>
            <h4>Services</h4>
            <ul>
                <li>Account Statements</li>
                <li>Enroll New Account</li>
                <li>Enroll a Credit Card</li>
                <li>Card Replacement</li>
                <li>New Checkbook</li>
            </ul>
        </div>
        <div className="logout">
            <img src={poweroff} alt="" />
        </div>
    </div>
}

export default React.memo(Sidebar)