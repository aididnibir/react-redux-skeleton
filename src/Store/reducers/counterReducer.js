import * as actionsTypes from '../Actions/actionTypes'
import { updateObject } from '../Utility'

const initialState = {
    ouch: 0,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.INCREMENT:
            return updateObject(state, { ouch: state.ouch + 1 });
        case actionsTypes.DECREMENT:
            return updateObject(state, { ouch: state.ouch - 1 });
        case actionsTypes.ADD:
            return updateObject(state, { ouch: state.ouch + action.val });
        case actionsTypes.SUBTRACT:
            return updateObject(state, { ouch: state.ouch - action.val });
        default:
    }
    return state;
}
export default counterReducer;

// plese find the old approach bellow
















// =========== old approach to update the states bellow ===========
// ================================================================
// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionsTypes.INCREMENT:
//             const newState = Object.assign({}, state);
//             newState.ouch = state.ouch + 1
//             return newState
//         case actionsTypes.DECREMENT:
//             return {
//                 ...state,
//                 ouch: state.ouch - 1
//             }
//         case actionsTypes.ADD:
//             return {
//                 ...state,
//                 ouch: state.ouch + action.val
//             }
//         case actionsTypes.SUBTRACT:
//             return {
//                 ...state,
//                 ouch: state.ouch - action.val
//             }
//         default:
//     }
//     return state;
// }
// ================================================================