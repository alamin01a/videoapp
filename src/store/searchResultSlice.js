import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    videoArray: []
}

const searchResultSlice = createSlice({
    name: 'searchResult',
    initialState,
    reducers: {
        fetchedAPIarray(state, action) {
            state.videoArray = action.payload
        }
    }
});

export const { fetchedAPIarray } = searchResultSlice.actions

export default searchResultSlice.reducer