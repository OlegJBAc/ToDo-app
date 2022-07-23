import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const appConditionSlice = createSlice({
    name: 'appCondition',
    initialState: {
        appInitialized: false,
        contextMenuActive: false,
    },
    reducers: {
        appInitialized(state, action: PayloadAction<boolean>){
            state.appInitialized = action.payload
        },
        setContextMenuActive(state, action: PayloadAction<boolean>){
            state.contextMenuActive = action.payload
        }
    }
})

export const { setContextMenuActive, appInitialized } = appConditionSlice.actions

export default appConditionSlice.reducer