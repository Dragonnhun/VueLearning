import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AppState} from "../../app/store";

export interface UserDataState {
    roles: string[]
    email: string
    username: string
    fullName: string
    pictureId: string
    profilePictureUrl: string
    authToken: string
    status: 'loggedOut' | 'idle' | 'loading' | 'failed'
}

const initialState: UserDataState = {
    roles: [],
    email: "",
    username: "jon",
    fullName: "John Dao",
    pictureId: "",
    profilePictureUrl: "",
    authToken: "",
    status: 'loggedOut'
}

export const loginAsync = createAsyncThunk(
    'login/fetchLogin',
    async (values: {username:string, password: string}) => {

        //Async login function
        const response = {data: []};

        return response.data;
    }
)

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,

    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) =>{
                state.status = 'loading'
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                // handle payload

            })
            .addCase(loginAsync.rejected, (state) => {
                state.status = 'failed'
            })
    }
})

export const selectUsername = (state: AppState) => state.userData.username
export const selectFullName = (state: AppState) => state.userData.fullName
export const selectUserStatus = (state: AppState) => state.userData.status


export default userDataSlice.reducer

