import React from "react"
import Header from "../components/header/header"
import SideBar from "../components/sideBar/sideBar"
import TasksPageCreator from "../components/taskPageCreator/tasksPageCreator"
import s from './mainLayout.module.scss'

const MainLayout = () => {
    const pageName = 'First_Page'
    return (
        <div>
            <Header/>
            <div className={s.body}>
                <SideBar/>
                <TasksPageCreator pageName={pageName}/>
            </div>
        </div>
    )
}

export default MainLayout