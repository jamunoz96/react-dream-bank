import Balance from "../../components/Commons/Balance";
import Header from "../../components/Commons/Header";
import Transactions from "../../components/Commons/Transactions";
import Sidebar from "../../components/Commons/Sidebar";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/types/AppState";

const Home = () => {
    const { auth, transactions }  = useSelector((state: AppState) => state);
    return <>
        <Sidebar />
        <div className="content">
            <Header user={auth.user} />
            <Balance user={auth.user} />
            <Transactions transactions={transactions} />
        </div>
    </>;
}

export default Home;