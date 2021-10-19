import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import BlankTemplate from "src/components/Commons/BlankTemplate";
import Loading from "src/components/Commons/Loading";
import { loginAction } from "src/redux/actions/AuthActions";
import { AppState } from "src/redux/types/AppState";
import AuthStore from "src/redux/types/AuthStore";
import { globalDispatch } from "src/redux/utils/globalDispatch";

const Login = () => {
    const { isLoading, errorMessage }: AuthStore = useSelector((state: AppState) => state.auth);

    const handleValidation = () => {
        return Yup.object().shape({
            identification: Yup.string().required("This field is required!"),
            password: Yup.string().required("This field is required!").min(7),
        });
    }

    const handleLogin = (formValue: object) => {
        globalDispatch(loginAction(formValue));
    }

    const initialValues = { identification: "", password: "" };

    return <BlankTemplate>
        <>
            <div className="wrapper-login">
                <h2>Welcome back</h2>
                <div className="line-title"></div>
                <h1>Login</h1> <br />
                <p className="info">
                    For you money safety, please delete all exrestions for the browser you use to log in to your wallet
                </p>

                <div className="form">
                    <Formik initialValues={initialValues}
                        validationSchema={handleValidation}
                        onSubmit={handleLogin}>

                        <Form>
                            <div className="form-group">
                                <label>Identification</label>
                                <Field name="identification" type="number" className="form-control" />
                                <ErrorMessage
                                    name="identification"
                                    component="div"
                                    className="badge bg-warning text-dark" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <Field name="password" type="password" className="form-control" />
                                <span className="forget-password">Forget password?</span>
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

                            <button type="submit" className="btn-blue" disabled={isLoading}>
                                <span>Login</span>
                            </button>
                            {isLoading && <Loading title="Checking" />}

                        </Form>
                    </Formik>
                </div>
            </div>

            <div className="wrapper-foo-login">
                <div>
                    <h2>Don't have account?</h2>
                    <p>Registre here <b>{'->'}</b></p>
                </div>
                <div>
                    <button className="btn-blue-2">Create account</button>
                </div>
            </div>
        </>
    </BlankTemplate>;
}

export default Login;