import * as actionsTypes from '../Actions/actionTypes'

const initialState = {
    ouch: 0,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.ouch = state.ouch + 1
            return newState
        case actionsTypes.DECREMENT:
            return {
                ...state,
                ouch: state.ouch - 1
            }
        case actionsTypes.ADD:
            return {
                ...state,
                ouch: state.ouch + action.val
            }
        case actionsTypes.SUBTRACT:
            return {
                ...state,
                ouch: state.ouch - action.val
            }
        default:
    }
    return state;
}
export default counterReducer;