import {configureStore} from '@reduxjs/toolkit'
import rootReducers from '../sliceReducer/todo/slice'

export let store=configureStore({
    reducer:rootReducers

})
 
