import React, { useEffect, useState } from "react";
import BlackTemplate from "src/components/Commons/BlackTemplate";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { globalDispatch } from "src/redux/utils/globalDispatch";
import { addAccount } from "src/redux/actions/AccountActions";
import Loading from "src/components/Commons/Loading";
import { AppState } from "src/redux/types/AppState";
import { useSelector } from "react-redux";
import AccountStore from "src/redux/types/AccountStore";

const NewProduct = () => {

    const { isLoading, errorMessage }: AccountStore = useSelector((state: AppState) => state.account);
    const [saved, setSaved] = useState(false);
    const [submit, setSubmit] = useState(false);
    const productType = ["Foreign Currency Exchange", "Bank Guarantee", "Remittance of Funds", "Credit cards", "Debit cards"];
    const handleValidation = () => {
        return Yup.object().shape({
            product: Yup.string().required("This field is required!"),
            cellphone: Yup.string().required("This field is required!"),
            income: Yup.string().required("This field is required!"),
        });
    }

    useEffect(() => {
        if(submit && !isLoading && !errorMessage) setSaved(true);
    }, [submit, isLoading, errorMessage])

    const handleSave = (formValue: object) => {
        globalDispatch(addAccount({...formValue, status: "Pending", currency: "USD"}));
        setSubmit(true);
    }

    return <BlackTemplate>
            <>
                {saved &&
                    <div className="wrapper-content">
                        <h2>New Product</h2>
                        <div className="line-title"></div>
                        <h1 className="title-style">Request Success </h1> <br />
                        <p className="info">
                            Your Order has been sent successfully, an advisor will contact you soon.
                        </p>
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
                        <h2 className="title-style">Request</h2>
                        <div className="line-title"></div>
                        <h1 className="title-style">New Product</h1> <br />
                        <p className="info">
                            Instant payments, and a lot of withdrawal methods available.
                        </p>
                        <div className="form">
                            <Formik initialValues={{ product: "", cellphone: "", income: "" }}
                                validationSchema={handleValidation}
                                onSubmit={handleSave}>

                                <Form>
                                    <div className="form-group">
                                        <label>Product</label>
                                        <Field name="product" as="select" className="form-control" >
                                            <option className="option"></option>
                                            {
                                                productType.map((item : string, index : number) => {
                                                    return <option key={index} className="option" value={item}>{item}</option>
                                                })
                                            }
                                        </Field>
                                        <ErrorMessage
                                            name="product"
                                            component="div"
                                            className="badge bg-warning text-dark" />
                                    </div>

                                    <div className="form-group">
                                        <label>Cellphone</label>
                                        <Field name="cellphone" type="number" className="form-control" />
                                        <ErrorMessage
                                            name="cellphone"
                                            component="div"
                                            className="badge bg-warning text-dark" />
                                    </div>

                                    <div className="form-group">
                                        <label>Monthly income</label>
                                        <Field name="income" type="number" className="form-control" />
                                        <span className="placeholder">USD</span>
                                        <ErrorMessage
                                            name="income"
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

export default NewProduct;