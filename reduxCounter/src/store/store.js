import {configureStore} from '@reduxjs/toolkit'
import rootReducer from '../counterSlice/counterSlice'

export let store=configureStore({
    reducer:rootReducer
})