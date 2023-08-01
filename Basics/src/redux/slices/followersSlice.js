// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const followersSlice = createSlice({
    name: "followers",
    initialState: [],
    reducers: {
        getFollowers() { },
        setFollowers(state, action) {
            const followers = action.payload
            return { ...state, followers };
        }
    }
});

export const { getFollowers, setFollowers } = followersSlice.actions;
export default followersSlice.reducer;