import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    postIsPending : false,
    posts : [],
    selectPosts : []
}

const postsSlice= createSlice({
    name : "post",
    initialState,
    reducers : {
        fetchingPosts(state) {
            state.postIsPending = true
        },
        fetchedPosts(state, action) {
            state.postIsPending = false,
            state.posts = action.payload
        },
        fetchedErrorPosts(state) {
            state.postIsPending = false
        },
        selectPostsAuthors(state, action) {
            state.selectPosts = action.payload
        }
    }
})

export const {fetchingPosts, fetchedPosts, fetchedErrorPosts, selectPostsAuthors} = postsSlice.actions
export default postsSlice.reducer