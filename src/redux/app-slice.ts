import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const appSlice = createSlice({
    name: 'app',
    initialState: {
        mainStorage: {} as projectStorageType
    },
    reducers: {
        createProject(state, action: PayloadAction<{ projectName: string }>){
            const projectName = action.payload.projectName
            let isExistAlready = false
            const storageKeys: string[] = Object.keys(state.mainStorage)

            storageKeys.forEach(key => {
                if(key === projectName){
                    isExistAlready = true
                }
            })
            if(!isExistAlready){
                // @ts-ignore
                state.mainStorage[projectName] = [] as taskType[]
                localStorage.setItem(`${projectName}`, JSON.stringify([]))
            }else{
                console.log('Project with exactly the same name is exist')
            }
        },
        deleteProject(state, action: PayloadAction<{ projectName: string }>){
            const projectName = action.payload.projectName
            let isExistAlready = false
            let storageKeys: string[] = Object.keys(state.mainStorage)
            storageKeys.forEach(key => {
                if(key === projectName){
                    isExistAlready = true
                }
            })
            if(!isExistAlready){
                console.log('Project with such name not found')  
            }else{
                // @ts-ignore
                state.mainStorage[projectName]
                // @ts-ignore
                .splice(state.mainStorage[projectName].indexOf(action.payload), 1)
                localStorage.removeItem(`${projectName}`)
            }
        },
        initializeProjectStorage(state, action: PayloadAction<projectStorageType>){
            state.mainStorage = action.payload
        },
    }
})


export const { createProject, deleteProject, initializeProjectStorage } = appSlice.actions

export default appSlice.reducer


// types area.

type projectStorageType = {
    [key: string]: taskType[]
}

interface taskType {
    body: string
    description: string
    id: string
    priority: string
}
