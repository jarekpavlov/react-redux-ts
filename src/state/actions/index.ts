import {actionTypes} from "../action-types";

interface depositInterface {
    type:actionTypes.DEPOSIT,
    payload:number
}
interface withdrawInterface {
    type:actionTypes.WITHDRAW,
    payload:number
}
interface defaultInterface {
    type:actionTypes.BANKRUPT,
}

export type Action = depositInterface | withdrawInterface | defaultInterface;