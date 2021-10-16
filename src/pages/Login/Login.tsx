import { Formik, Field, Form, ErrorMessage } from "formik";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import BlankTemplate from "src/components/Commons/BlankTemplate";
import Loading from "src/components/Commons/Loading";
import * as Yup from "yup";
import { getUserAction, loginAction } from "../../redux/actions/AuthActions";
import { AppState } from "../../redux/types/AppState";
import AuthStore from "../../redux/types/AuthStore";
import { globalDispatch } from "../../redux/utils/globalDispatch";

const Login = () => {
    const { token, isLoading, errorMessage }: AuthStore = useSelector((state: AppState) => state.auth);

    useEffect(() => {
        if (token) globalDispatch(getUserAction());
    }, [token]);

    const handleValidation = () => {
        return Yup.object().shape({
            username: Yup.string().required("This field is required!"),
            password: Yup.string().required("This field is required!"),
        });
    }

    const handleLogin = (formValue: object) => {
        globalDispatch(loginAction(formValue));
    }

    const initialValues = {
        username: "eve.holt@reqres.in",
        password: "cityslicka"
    };

    return <>
        <BlankTemplate>
            <div>
                <Formik initialValues={initialValues}
                    validationSchema={handleValidation}
                    onSubmit={handleLogin}>

                    <Form>
                        <div className="form-group">
                            <label>Username</label>
                            <Field name="username" type="text" className="form-control" />
                            <ErrorMessage
                                name="username"
                                component="div"
                                className="badge bg-warning text-dark" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <Field name="password" type="password" className="form-control" />
                            <a href="javascript:;" className="forget-password">Forget password?</a>
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="badge bg-warning text-dark" />
                        </div>

                        {errorMessage && (
                            <div className="form-group">
                                <div className="alert-error" >
                                    {errorMessage}
                                </div>
                            </div>
                        )}

                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn-blue" disabled={isLoading}>
                                <span>Login</span>
                            </button>
                            {isLoading && <Loading title="Checking" />}
                        </div>

                    </Form>
                </Formik>
            </div>
        </BlankTemplate>
    </>;
}

export default Login;