import React from "react"
import { PropsChildren } from "src/types/types"
import "src/scss/BlankTemplate.scss";

const BlankTemplate = ({ children }: PropsChildren) => {
    return <div className="blankTemplate">
        <div className="logo"></div>
        <div className="banner-top"></div>

        <div className="wrapper-login">
            <h2>Welcome back</h2>
            <div className="line-title"></div>
            <h1>Login</h1> <br />
            <p className="info">
                For you money safety, please delete all exrestions for the browser you use to log in to your wallet
            </p>

            <div className="form">
                {children}
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

    </div>
}

export default React.memo(BlankTemplate)