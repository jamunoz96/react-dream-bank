import not from "../../assets/icons/bell.png";
import chat from "../../assets/icons/writing.png";

const Header = ({ user } : any) => {
    return <header className="header">
        <div className="center-vertical">
        <img className="icon" src={not} alt="" />
        <img className="icon" src={chat} alt="" />
        <img className="avatar" src={user?.avatar} alt="" />
        <b className="vas ml-10">{user?.first_name} {user?.last_name} </b>
        <b className="vas ml-10 opt">&#8595;</b>
        </div>
    </header>
}

export default Header