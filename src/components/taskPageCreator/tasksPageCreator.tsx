import React, { FC } from "react"
import s from './tasksPageCreator.module.scss'

interface propsType {
    pageName: string
}

const TasksPageCreator: FC<propsType> = ({pageName}) => {
    return (
        <div className={s.page}>
            <input/>
            <div>{pageName}</div>
        </div>
    )
}

export default TasksPageCreator