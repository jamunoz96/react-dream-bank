import React from "react"
import AuthStore from "src/redux/types/AuthStore"

const Balance = ({ user } : AuthStore) => {
    return <div className="balance">
        <div className="balance-content">
            <img className="avatar-2" src={user?.avatar} alt="" />
            <div className="balance-text">
                <h3>Welcome back, {user?.first_name}!</h3>
                <p>Your last login was 09/06/2016 05:34 PM</p>
            </div>
            <div className="balance-text-2">
                <p>Total Balance</p>
                <h1>$17,288.29</h1>
                <hr className="line-balance" />
            </div>
            <div className="balance-text-3">
                <button className="btn-line btn-balance" type="button">Request new product</button>
                <button className="btn-line btn-balance" type="button">Make a transfer</button>
            </div>
        </div>
    </div>
}

export default React.memo(Balance)