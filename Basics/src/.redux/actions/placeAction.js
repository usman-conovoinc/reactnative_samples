import types from "./types.js";
export const addPlace = placeName => {
    return {
        type: types.ADD_PLACE,
        payload: placeName
    }
}