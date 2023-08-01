import types from "../actions/types.js"

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREASE_COUNTER:
            return { counter: state.counter + action.payload.counter }
        case types.DECREASE_COUNTER:
            return { counter: state.counter - action.payload.counter }
        default:
            return {
                counter: 0
            }
    }
}

export default counterReducer;