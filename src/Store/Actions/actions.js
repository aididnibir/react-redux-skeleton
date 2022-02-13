export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT'
export const ADD = 'ADD'
export const SUBTRACT = 'SUBTRACT'
export const STORE_RESULT = 'STORE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'


export const increment = () => {
    return {
        type: INCREMENT
    }
};
export const decrement = () => {
    return {
        type: DECREMENT
    }
};
export const add = (value) => {
    return {
        type: ADD,
        val: value
    }
};
export const substract = (value) => {
    return {
        type: SUBTRACT,
        val: value
    }
};

const saveResult = (response) => {
    return {
        type: STORE_RESULT,
        result: response
    }
}
export const store_result = (value) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(saveResult(value));
        }, 2000);
    }
};
export const delete_result = (value) => {
    return {
        type: DELETE_RESULT,
        selectedElementID: value
    }
};