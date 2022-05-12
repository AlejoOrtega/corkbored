import { createSlice } from '@reduxjs/toolkit'

const initialState = false

export const updateSlice = createSlice({
    name: 'memories',
    initialState:{ value: initialState },
    reducers:{
        triggerUpdate:(state) => {
            state.value = !state.value
        },
    }
})

export const {triggerUpdate} = updateSlice.actions

export default updateSlice.reducer;