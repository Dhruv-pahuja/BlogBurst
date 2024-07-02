import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    status: false,
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setStatus: (state, action) => {
            state.status = action.payload.status;
        }
    }
})

export const {setPosts, setStatus} = postSlice.actions;

export default postSlice.reducer;