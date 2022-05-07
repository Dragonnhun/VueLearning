import { createSlice } from '@reduxjs/toolkit'

export interface DarkModeState {
    value: boolean
}

const initialState: DarkModeState = {
    value: false
}

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,

    reducers: {
        turnOn: (state) => {
            state.value = true
        },
        turnOff: (state) => {
            state.value = false
        },
        toggle: (state) => {
            state.value = !state.value
        }
    },
})

export const {turnOn, turnOff, toggle} = darkModeSlice.actions

export default darkModeSlice.reducer
