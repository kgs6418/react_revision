import {createSlice,nanoid} from '@reduxjs/toolkit'


//store ke andar hum ek "initial state" banate hai and store ke andar kuch bhi ho sakta hai jaise array,obj,api se data ho sakta hai
let initialState={
    todos:[{id:1,text:"hello from initial state"}]
}


//step:2 - create slice:-
export let slice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            let todo={
                //getting "unique id"  from nanoid().
                //getting text value from action.payload. Payload is actually an object.
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)

        },
        removeTodo:(state,action)=>{
            state.todos= state.todos.filter((ele)=>ele.id!==action.payload)
        },
        // editTodo:(state,action)=>{
        //    let index= state.todos.findIndex((ele) => ele.id === action.payload.id);
           
        // }
    }

})
// step-3.
export let {addTodo,removeTodo}=slice.actions
//step-4.
export default slice.reducer
