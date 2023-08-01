// @ts-nocheck
import { call, put } from "redux-saga/effects";
import { setFollowers } from "../../slices/followersSlice.js";
import { getFollowersAPI } from "../requests/follower.js";

export function* handleGetFollowers(action) {
    try {
        const response = yield call(getFollowersAPI);
        yield put(setFollowers(response.data, false));
    } catch (error) {
        console.log(error);
    }

}