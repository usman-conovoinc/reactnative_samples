// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        getUsers() { },
        setUsers(state, action) {
            const users = action.payload;
            return { ...state, users }
        }
    }
});

export const { getUsers, setUsers } = userSlice.actions
export default userSlice.reducer;