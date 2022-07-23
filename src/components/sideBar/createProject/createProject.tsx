import React, { FC } from "react"
import { useDispatch } from "react-redux"
import { createProject, deleteProject } from "../../../redux/app-slice"
import s from './creatingProject.module.scss'
import { Formik, Form, Field } from 'formik'


interface propsType {
    pageName: string
}
interface submitType {
    setSubmitting: (isSubmitted: boolean) => any
}
interface valuesType {
    createProject: string
}

const CreateProject: FC<propsType> = ({pageName}) => {
    const dispatch = useDispatch()
    const submit = (values: valuesType, { setSubmitting }: submitType) => {
        dispatch(createProject({ name: values.createProject }))
        values.createProject = ''
        setSubmitting(false)
    }
    return (
        <>
            <Formik initialValues={{ createProject: '' }} onSubmit={submit}>
                <Form>
                    <Field name='createProject'/>
                    <button type="submit">Create</button>
                </Form>
            </Formik>
        </>
    )
}

export default CreateProject