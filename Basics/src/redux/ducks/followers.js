// @ts-nocheck

export const GET_FOLLOWERS = "GET_FOLLOWERS"
const SET_FOLLOWERS = "SET_FOLLOWERS"

export const setFollowers = (followers, loading) => ({
    type: SET_FOLLOWERS,
    followers: followers,
    loading: loading
});

export const getFollowers = () => ({
    type: GET_FOLLOWERS,
    loading: true
});

const initialState = {
    followers: [],
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FOLLOWERS:
            const { followers, loading } = action;
            return { ...state, followers, loading };
        default:
            return state;
    }
}