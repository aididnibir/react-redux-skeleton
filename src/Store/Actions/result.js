import * as actionTypes from './actionTypes'

const saveResult = (response) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: response
    }
}
export const store_result = (value) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // console.log(getState());
            dispatch(saveResult(value));
        }, 2000);
    }
};
export const delete_result = (value) => {
    return {
        type: actionTypes.DELETE_RESULT,
        selectedElementID: value
    }
};