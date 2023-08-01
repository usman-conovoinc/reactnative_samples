import types from "./types.js";

export const increaseCounter = (params) => {
    return {
        type: types.INCREASE_COUNTER,
        payload: params
    }
}

export const decreaseCounter = (params) => {
    return {
        type: types.DECREASE_COUNTER,
        payload: params
    }
}