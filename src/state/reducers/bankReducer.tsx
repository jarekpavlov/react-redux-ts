import {Action} from "../actions";
import {actionTypes} from "../action-types";

const initialState = 0;

const reducer = (state = initialState, action: Action) =>{
    switch (action.type){
        case actionTypes.DEPOSIT:
            return state + action.payload;
        case actionTypes.WITHDRAW:
            return state - action.payload;
        case actionTypes.BANKRUPT:
            return 0;
        default:
            return state;
    }

}

export default reducer;