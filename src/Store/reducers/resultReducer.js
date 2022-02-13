import * as actionsTypes from '../Actions/actionTypes'

const initialState = {
    results: []
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), Value: action.result })
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
        default:

    }
    return state;
}
export default resultReducer;