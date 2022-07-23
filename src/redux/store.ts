import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import tasksReducer from './tasks-slice'
import appReducer from './app-slice'
import appConditionReducer from './appCondition-slice'

const rootReducer = combineReducers({
    tasksReducer,
    appReducer,
    appConditionReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>
export type rootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store