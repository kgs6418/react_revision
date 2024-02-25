import { createSlice, nanoid } from "@reduxjs/toolkit";

export let slice = createSlice({
  name: "one",
  initialState: { todos: [{ id: 1, text: "gaurav" }] },
  reducers: {
    add: (state, action) => {
      let newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(newTodo);
    },

    remove: (state, action) => {
        state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
    },
  },
});

export let {add,remove}=slice.actions
export default slice.reducer
