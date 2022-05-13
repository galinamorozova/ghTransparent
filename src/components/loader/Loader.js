import {observer} from "mobx-react";
import "./loader.scss";
import React from "react";

const OrdinaryCircleLoader = () => {
    return (
        <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )

}
export default observer(OrdinaryCircleLoader);