import {actionTypes} from "../action-types";
import {Dispatch} from "redux";
import {Action} from "../actions";

export const depositMoney = (amount: number) =>{
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type: actionTypes.DEPOSIT,
            payload:amount
        })
    }
}
export const withdrawMoney = (amount: number) =>{
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type: actionTypes.WITHDRAW,
            payload:amount
        })
    }
}
export const bankrupt = () =>{
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type: actionTypes.BANKRUPT,
        })
    }
}