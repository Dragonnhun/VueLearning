import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState, AppThunk } from '../../app/store'

export interface InterfaceState {
    bannerText: string
    version: number
    sidebarIsOpened: boolean
    status: 'idle' | 'loading' | 'failed'
}

const initialState: InterfaceState = {
    bannerText: "TEXT",
    version: 0,
    sidebarIsOpened: false,
    status: 'idle'
}

export const interfaceSlice = createSlice({
    name: 'interface',
    initialState,

    reducers: {
        toggleSideBar: (state) => {
            state.sidebarIsOpened = !state.sidebarIsOpened
        }
    }
})

export const {toggleSideBar} = interfaceSlice.actions

export const selectToggleSideBar = (state: AppState) => state.interface.sidebarIsOpened
export const selectBannerText = (state: AppState) => state.interface.bannerText
export const selectVersion = (state: AppState) => state.interface.version

export default interfaceSlice.reducer
