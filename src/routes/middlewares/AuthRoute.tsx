import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthStore from "../../redux/types/AuthStore";
import { AppState } from "../../redux/types/AppState";

const AuthRoute = ({ component: Component, ...rest } : any) => {
    const {token, user} : AuthStore = useSelector((state: AppState) => state.auth);
    return (
        <Route {...rest} render={ props =>
                token && user ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
}

export default AuthRoute;