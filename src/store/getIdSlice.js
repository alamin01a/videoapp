import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    videoId: ""
}

const getIdSlice = createSlice({
    name: 'getID',
    initialState,
    reducers: {

        isVideoID(state, action) {
            state.videoId = action.payload
        }


    }
});

export const { isVideoID } = getIdSlice.actions

export default getIdSlice.reducer