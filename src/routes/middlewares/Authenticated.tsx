import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthStore from "../../redux/types/AuthStore";
import { AppState } from "../../redux/types/AppState";

const Authenticated = ({ component: Component, ...rest } : any) => {
    const {user} : AuthStore = useSelector((state: AppState) => state.auth);
    return (
        <Route {...rest} render={ props =>
                user?.id ? (
                    <Redirect to="/account/summary" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
}

export default Authenticated;