import { takeLatest } from "redux-saga/effects"
import { handleGetUsers } from "./handlers/user.js"
// import { GET_USERS } from "../ducks/user.js"
import { getUsers } from "../slices/userSlice.js"

import { handleGetFollowers } from "./handlers/followers.js"
// import { GET_FOLLOWERS } from "../ducks/followers.js"
import { getFollowers } from "../slices/followersSlice.js"


export function* watcherSaga() {
    yield takeLatest(getUsers.type, handleGetUsers);
    yield takeLatest(getFollowers.type, handleGetFollowers);
}