import { createSlice } from "@reduxjs/toolkit";
const initialState = { 
    data: ''
}

const selectedCarSlice = createSlice({
    name: 'selected-car', 
    initialState, 
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { setData } = selectedCarSlice.actions

export default selectedCarSlice.reducer