import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        
        showInput(state, action) {
            state.value = action.payload
        }
    }
});

export const { showInput } = searchSlice.actions

export default searchSlice.reducer