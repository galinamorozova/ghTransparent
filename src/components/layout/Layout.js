import './layout.scss';
import {React, useContext} from "react";
import { observer } from "mobx-react";
import StoreContext from "../context";

const Layout = () => {

    const {layout} = useContext(StoreContext);

    return  <>
        {layout ? <div className="layout"></div> : <div></div>}
    </>
}

export default observer(Layout);