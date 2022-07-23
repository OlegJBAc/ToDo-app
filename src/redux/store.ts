import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksReducer from './tasks-slice'
import appReducer from './app-slice'


const rootReducer = combineReducers({
    tasksReducer,
    appReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch


export default store