import React from 'react'
import { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoForm(){
    let[todo,setTodo]=useState("")

// consuming the cumtom hook,and extracting what i need.
    let{addTodo}=useTodo()

    let add=(e)=>{
        e.preventDefault()
        if(!todo){
            return
        }else{
//note-: addTodo jo app.jsx me hai i.e. setTodo functionality ke andar i could have written here alseo.           
            addTodo({ id: Date.now(),todo:todo,completed:false})
        }
        setTodo("")
    }



    return(
        <>
         <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=> setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>

        </>
    )
}
export default TodoForm
