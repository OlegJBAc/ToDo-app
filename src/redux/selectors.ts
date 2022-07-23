import { rootStateType } from "./store";

export const getContextMenuActive = (state: rootStateType) => {
    return state.appConditionReducer.contextMenuActive
}

export const getAllProjectsName = (state: rootStateType) => {
    return Object.keys(state.appReducer.mainStorage) as string[]
}