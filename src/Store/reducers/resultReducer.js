import * as actionsTypes from '../Actions/actionTypes'
import { updateObject } from '../Utility'

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter((el, index) => el.id !== action.selectedElementID)
    return updateObject(state, { results: updatedArray });
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.STORE_RESULT:
            return updateObject(state, { results: state.results.concat({ id: new Date(), Value: action.result }) });
        case actionsTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:

    }
    return state;
}
export default resultReducer;
// plese find the old approach bellow
















// =========== old approach to update the states bellow ===========
// ================================================================
// const resultReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionsTypes.STORE_RESULT:
//             return {
//                 ...state,
//                 results: state.results.concat({ id: new Date(), Value: action.result })
//             }
//         case actionsTypes.DELETE_RESULT:
//             // const id = 1;
//             // const newArray = [...state.results];
//             // newArray.splice(id, 1);
//             const updatedArray = state.results.filter((el, index) => el.id !== action.selectedElementID)
//             return {
//                 ...state,
//                 results: updatedArray
//             }
//         default:

//     }
//     return state;
// }
// ================================================================