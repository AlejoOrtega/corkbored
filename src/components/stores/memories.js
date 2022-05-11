import { createSlice } from '@reduxjs/toolkit'

const initialState = {userMemories:[]}

export const memoriesSlice = createSlice({
    name: 'memories',
    initialState:{ value: initialState },
    reducers:{
        update:(state, action) => {
            state.value = action.payload
        },
        cleanMemories:(state) => {
            state.value = initialState
        }
    }
})

export const {update, cleanMemories} = memoriesSlice.actions

export default memoriesSlice.reducer;