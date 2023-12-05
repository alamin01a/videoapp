import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "" 
}

const searchtermSlice = createSlice({
    name: 'searchtrerm',
    initialState,
    reducers: {
        searchItemValue(state, action) {
            state.value = action.payload
        }
    }
});

export const { searchItemValue } = searchtermSlice.actions

export default searchtermSlice.reducer