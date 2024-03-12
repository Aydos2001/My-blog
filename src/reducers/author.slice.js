import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    authorisPending : false,
    authors : []
}

const authorsSlice = createSlice({
    name : "author",
    initialState,
    reducers : {
        fetchingAuthors(state) {
            state.authorisPending = true
        },
        fetchedAuthors(state, action) {
            state.authorisPending = false,
            state.authors = action.payload
        },
        fetchedErrorAuthors(state, action) {
            state.authorisPending = false
        }
    }
})

export const {fetchingAuthors, fetchedAuthors, fetchedErrorAuthors} = authorsSlice.actions
export default authorsSlice.reducer