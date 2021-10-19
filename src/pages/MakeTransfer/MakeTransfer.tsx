import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { AppState } from "src/redux/types/AppState";
import TransactionStore from "src/redux/types/TransactionStore";
import { globalDispatch } from "src/redux/utils/globalDispatch";
import { addTransaction } from "src/redux/actions/TransactionActions";
import BlackTemplate from "src/components/Commons/BlackTemplate";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Loading from "src/components/Commons/Loading";

const MakeTransfer = () => {
    
    const { account, transaction: {isLoading, errorMessage }} = useSelector((state: AppState) => state);
    const [saved, setSaved] = useState(false);
    const [submit, setSubmit] = useState(false);

    const handleValidation = () => {
        return Yup.object().shape({
            accountId: Yup.string().required("This field is required!"),
            business: Yup.string().required("This field is required!"),
            value: Yup.string().required("This field is required!"),
        });
    }

    useEffect(() => {
        if(submit && !isLoading && !errorMessage) setSaved(true);
    }, [submit, isLoading, errorMessage])

    const handleSave = (formValue: { accountId: number, business: string, value: number}) => {
        globalDispatch(addTransaction(formValue.accountId, formValue));
        setSubmit(true);
    }

    return <BlackTemplate>
            <>
                {saved &&
                    <div className="wrapper-content">
                        <h2>Make Transfer</h2>
                        <div className="line-title"></div>
                        <h1 className="title-style">Transfer Success </h1> <br />
                        <div className="form">
                            <Link className="no-decorator" to="/" >
                                <button type="button" className="btn-blue">
                                    Go to Home
                                </button>
                            </Link>
                        </div>
                    </div>
                }

                {!saved &&
                    <div className="wrapper-content">
                        <h2 className="title-style">Make Transfer</h2>
                        <div className="line-title"></div>
                        <h1 className="title-style">New Transaction</h1> <br />
                        
                        <div className="form">
                            <Formik initialValues={{ accountId: 0, business: "", value: 0 }}
                                validationSchema={handleValidation}
                                onSubmit={handleSave}>

                                <Form>
                                    <div className="form-group">
                                        <label>Account</label>
                                        <Field name="accountId" as="select" className="form-control" >
                                            <option className="option"></option>
                                            {
                                                account.accounts.map((item : any, index : number) => {
                                                    return <option key={index} className="option" value={item.id}>{item.name}</option>
                                                })
                                            }
                                        </Field>
                                        <ErrorMessage
                                            name="accountId"
                                            component="div"
                                            className="badge bg-warning text-dark" />
                                    </div>

                                    <div className="form-group">
                                        <label>Business</label>
                                        <Field name="business" type="text" className="form-control" />
                                        <ErrorMessage
                                            name="business"
                                            component="div"
                                            className="badge bg-warning text-dark" />
                                    </div>

                                    <div className="form-group">
                                        <label>Value</label>
                                        <Field name="value" type="number" className="form-control" />
                                        <span className="placeholder">USD</span>
                                        <ErrorMessage
                                            name="value"
                                            component="div"
                                            className="badge bg-warning text-dark" />
                                    </div>

                                    <div className="buttons">
                                        <button type="submit" className="btn-blue">
                                            <span>Send</span>
                                        </button>
                                        <button type="button" className="btn-outline">
                                            <Link className="no-decorator" to="/" >
                                                Cancel
                                            </Link>
                                        </button>
                                    </div>

                                    {isLoading && <Loading />}

                                </Form>
                            </Formik>
                        </div>
                    </div>
                }
            </>
        </BlackTemplate>;
}

export default MakeTransfer;