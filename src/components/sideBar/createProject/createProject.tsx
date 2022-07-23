import React, { FC } from "react"
import { useDispatch } from "react-redux"
import { createProject, deleteProject } from "../../../redux/app-slice"
import s from './creatingProject.module.scss'
import { Formik, Form, Field } from 'formik'


const CreateProject: FC<propsType> = ({ startOrEndProjectCreating }) => {
    const dispatch = useDispatch()
    const submit = (values: valuesType, { setSubmitting }: submitType) => {
        dispatch(createProject({ projectName: values.createProject }))
        values.createProject = ''
        setSubmitting(false)
        startOrEndProjectCreating(false)()
    }
    const endCreating = (e: any) => {
        if(e.target === e.currentTarget){
            startOrEndProjectCreating(false)()
        }
    }

    return (
        <div className={s.createProject__overlay} onClick={endCreating}>
            <div className={s.createProject}>
                <Formik initialValues={{ createProject: '' }} onSubmit={submit}>
                    <Form>
                        <Field name='createProject'/>
                        <button type="submit">Create</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default CreateProject


// types area

interface propsType {
    startOrEndProjectCreating: (isStart: boolean) => any
}
interface submitType {
    setSubmitting: (isSubmitted: boolean) => any
}
interface valuesType {
    createProject: string
}