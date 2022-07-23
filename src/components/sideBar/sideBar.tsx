import React, { FC } from "react"
import { useDispatch } from "react-redux"
import { createProject, deleteProject } from "../../redux/app-slice"
import CreateProject from "./createProject/createProject"
import s from './sideBar.module.scss'

interface propsType {
    pageName: string
}

const SideBar: FC<propsType> = ({pageName}) => {
    const dispatch = useDispatch()

    return (
        <>
            <nav className={s.navBar}>
                <ul>
                    <li>{pageName}</li>
                </ul>
                <CreateProject pageName={pageName}/>
            </nav>
        </>
    )
}

export default SideBar