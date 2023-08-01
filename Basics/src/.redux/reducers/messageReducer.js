import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    message: 'Initial message',
};

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage(state, action) {
            state.message = action.payload;
        }
    }
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;
