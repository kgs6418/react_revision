import {configureStore} from '@reduxjs/toolkit' 

import todoReducers from '../reducer/todo/todoSlice'

export let store=configureStore({
    reducer:todoReducers
})