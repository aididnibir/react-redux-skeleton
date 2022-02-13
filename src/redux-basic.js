const redux = require('redux');
const createStore = redux.createStore;
// import { createStore as _createStore } from 'redux';
// const createStore = _createStore;

const initailState = {
    counter: 0
}

//1st step: create reducer
const rootReducer = (currentState = initailState, action) => {
    if (action.type == 'INCRIMENT_COUNTER') {
        return {
            ...currentState,
            counter: currentState.counter + 1
        }
    }
    if (action.type == 'ADD_INCRIMENT_COUNTER') {
        return {
            ...currentState,
            counter: currentState.counter + action.value
        }
    }
    // return currentState;
}


//store
const store = createStore(rootReducer);

// console.log(store.getState());


//subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
})

//dispatching action
store.dispatch({
    type: 'INCRIMENT_COUNTER'

})
store.dispatch({
    type: 'ADD_INCRIMENT_COUNTER',
    value: 10
})

// console.log(store.getState());