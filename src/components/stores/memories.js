import { createSlice } from '@reduxjs/toolkit'

const initialState = {userMemories:[]}

export const memoriesSlice = createSlice({
    name: 'memories',
    initialState:{ value: initialState },
    reducers:{
        update:(state, action) => {
            state.value = action.payload
        }
    }
})

export const {update} = memoriesSlice.actions

export default memoriesSlice.reducer;