import { Link } from "react-router-dom"
import { encrypProduct } from "src/utils/text"
import icon from "src/assets/icons/in.png";

const MainAccount = ({ number, product }: any) => {
    return <div className="main-account">
        <b>{encrypProduct(number, product)}</b>
        <Link to="/account/summary">
            <img className="icon" src={icon} alt="" />
        </Link>
    </div>
}

export default MainAccount