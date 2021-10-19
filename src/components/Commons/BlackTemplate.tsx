import React from "react"
import { PropsChildren } from "src/types/types"
import "src/scss/BlackTemplate.scss";

const BlackTemplate = ({ children }: PropsChildren) => {
    return <div className="blackTemplate">
        <div className="logo"></div>
        <div className="banner-top"></div>

        {children}

    </div>
}

export default React.memo(BlackTemplate)