import { useSelector } from "react-redux";
import Balance from "src/components/Commons/Balance";
import Header from "src/components/Commons/Header";
import Sidebar from "src/components/Commons/Sidebar";
import { AppState } from "src/redux/types/AppState";
import TransactionStore from "src/redux/types/TransactionStore";
import AuthStore from "src/redux/types/AuthStore";

const Home = () => {
    const { auth, transactions } = useSelector((state: AppState) => state);
    return <>
        {/* <div className="content"> */}
            <h1>Hola</h1>
        {/* </div> */}
    </>;
}

export default Home;