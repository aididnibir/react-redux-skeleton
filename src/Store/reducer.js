import * as actionsTypes from './actions'

const initialState = {
    ouch: 0,
    results: []
}

const reducer = (state = initialState, action) => {
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
        case actionsTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), Value: state.ouch })
            }
        case actionsTypes.DELETE_RESULT:
            // const id = 1;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            const updatedArray = state.results.filter((el, index) => el.id !== action.selectedElementID)
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
}
export default reducer;