import { createSlice, PayloadAction } from "@reduxjs/toolkit"


const appSlice = createSlice({
    name: 'app',
    initialState: {
        projects: [] as projectType[]
    },
    reducers: {
        createProject(state, action: PayloadAction<projectType>){
            let isExistAlready = false
            state.projects.forEach(project => {
                if(project.name === action.payload.name){
                    isExistAlready = true
                }
            })
            if(!isExistAlready){
                state.projects.push({ name: action.payload.name })
                localStorage.setItem(`${action.payload.name}`, JSON.stringify(action.payload))
            }else{
                console.log('Project with exactly the same name is exist')
            }
        },
        deleteProject(state, action: PayloadAction<projectType>){
            let isExistAlready = false
            state.projects.forEach(project => {
                if(project.name === action.payload.name){
                    isExistAlready = true
                }
            })
            if(!isExistAlready){
                console.log('Project with such name not found')  
            }else{
                state.projects.splice(state.projects.indexOf(action.payload), 1)
                localStorage.removeItem(`${action.payload.name}`)
            }
        }
    }
})


export const { createProject, deleteProject } = appSlice.actions

export default appSlice.reducer

// types area.

interface projectType {
    name: string
}