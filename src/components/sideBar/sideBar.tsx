import React, { FC, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setContextMenuActive } from "../../redux/appCondition-slice"
import { getAllProjectsName } from "../../redux/selectors"
import CreateProject from "./createProject/createProject"
import s from './sideBar.module.scss'
import { v4 } from 'uuid'


interface propsType {
}

const SideBar: FC<propsType> = () => {
    const dispatch = useDispatch()
    const [isProjectCreating, setIsProjectCreating] = useState<boolean>(false)
    const startOrEndProjectCreating = (isStart: boolean) => () => {
        dispatch(setContextMenuActive(isStart))
        setIsProjectCreating(isStart)
    }
    const allProjectsName = useSelector(getAllProjectsName)
    return (
        <>
            <nav className={s.navBar}>
                <ul>
                    {
                        allProjectsName.map(projectName => {
                            return <li key={v4()}>{projectName}</li>
                        })
                    }
                </ul>
                <button onClick={startOrEndProjectCreating(true)}>Create a new project</button>
                { isProjectCreating && <CreateProject startOrEndProjectCreating={startOrEndProjectCreating}/> }
            </nav>
        </>
    )
}

export default SideBar