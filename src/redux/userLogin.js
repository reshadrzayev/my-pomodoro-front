import {createSlice} from '@reduxjs/toolkit'

export const userLogin = createSlice({
        name: "userLogin",
        initialState: {
            user:[]
        },
        reducers:{
            setUser: (state,action)=>{
                state.user = action.payload
            },
            removeUser:(state,action)=>{
                state.user = []
            }
        }
    }
)

export const {setUser,removeUser} = userLogin.actions
export default userLogin.reducer
