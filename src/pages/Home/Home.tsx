import Balance from "../../components/Commons/Balance";
import Header from "../../components/Commons/Header";
import LastTransactions from "../../components/Commons/LastTransactions";
import Sider from "../../components/Commons/Sider";

const Home = () => {
    return <>
        <Sider />
        <Header />
        <Balance />
        <LastTransactions />
    </>;
}

export default Home;