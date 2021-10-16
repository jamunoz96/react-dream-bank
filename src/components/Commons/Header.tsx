import React from "react";
import AuthStore from "src/redux/types/AuthStore";
import noti from "../../assets/icons/bell.png";
import chat from "../../assets/icons/writing.png";

const Header = ( { user } : AuthStore) => {
    return <header className="header">
        <div className="center-vertical">
        <img className="icon" src={noti} alt="" />
        <img className="icon" src={chat} alt="" />
        <img className="avatar" src={user?.avatar} alt="" />
        <b className="vas ml-10">{user?.first_name} {user?.last_name} </b>
        <b className="vas ml-10 opt">&#8595;</b>
        </div>
    </header>
}

export default React.memo(Header)