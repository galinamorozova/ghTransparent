import GeneralStore from "./Store";
import {createContext} from "react";


const store = new GeneralStore();
const StoreContext = createContext(store);
export default StoreContext;