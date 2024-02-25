import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {remove} from '../sliceReducer/todo/slice'


function TodoList(){

    let dispatch=useDispatch()
    let selector=useSelector((state)=>state.todos)

    return (
        <>
        <ul>{selector.map((todo)=>(
             <li
             key={todo.id}
             >
             <div>{todo.text}</div>
             <button
             onClick={()=>dispatch(remove(todo.id))}
             >delete</button>
         </li>

        ))}
           
        </ul>

        </>
    )
}
export default TodoList