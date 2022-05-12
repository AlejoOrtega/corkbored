import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const memoriesSlice = createSlice({
    name: 'memories',
    initialState:{ value: initialState },
    reducers:{
        update:(state, action) => {
            state.value = action.payload
        },
        add:(state, action) => {
            let newArray = [...state.value]
            newArray.push(action.payload)
            state.value = newArray
        },
        cleanMemories:(state) => {
            state.value = initialState
        }
    }
})

export const {update, add, cleanMemories} = memoriesSlice.actions

export default memoriesSlice.reducer;