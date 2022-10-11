import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../Page/Post/PostSlice';
import usersReducer from '../Page/Post/userSlice';



export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
});