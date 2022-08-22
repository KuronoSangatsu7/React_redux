import { createStore } from "redux";

const initialState = {counter: 0, showCounter: true}

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'increment':
            return {...state, counter: state.counter + 1}
        case 'decrement':
            return {...state, counter: state.counter -1}
        case 'add':
            return {...state, counter: state.counter + action.value}
        case 'toggle':
            return {...state, showCounter: !state.showCounter}
        default:
            return state
    }
}

const store = createStore(counterReducer);

export default store;