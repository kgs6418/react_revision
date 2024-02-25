import { createSlice } from "@reduxjs/toolkit";

let initialState={value:0}

let counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increase:(state,action)=>{
         
          state.value=state.value+1
        //   console.log(state.value)
        },
        decrease:(state,action)=>{
            state.value=state.value-1
        //   console.log(state.value)

        },
    }
})
export let {increase,decrease}=counterSlice.actions
export default counterSlice.reducer
