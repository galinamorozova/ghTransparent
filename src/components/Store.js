import { makeAutoObservable } from "mobx"


class GeneralStore {

    layout = false;

    setLayout(boolean){
        this.layout = boolean;
    }

    constructor() {
        makeAutoObservable(this)
    }

}


export default GeneralStore
