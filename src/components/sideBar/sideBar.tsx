import React, { FC } from "react"
import s from './sideBar.module.scss'

interface propsType {
    pageName: string
}

const SideBar: FC<propsType> = ({pageName}) => {
    return (
        <>
            <nav className={s.navBar}>
                <ul>
                    <li>{pageName}</li>
                </ul>
            </nav>
        </>
    )
}

export default SideBar