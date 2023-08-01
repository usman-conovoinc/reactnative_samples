// @ts-nocheck
import { call, put } from "redux-saga/effects";
import { setUsers } from "../../slices/userSlice.js";
import { getUsersAPI } from "../requests/user.js"

export function* handleGetUsers(action) {
    try {
        const response = yield call(getUsersAPI);
        yield put(setUsers(response.data, false));
    } catch (error) {
        console.log(error);
    }

}