import React from 'react'
import { Formik,Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function LoginForm() {

    const initialValues={
        email:'',
        password:'',
    }

    const validationSchema = Yup.object({
        email:Yup.string().email('Invalid').required('Required'),
        password:Yup.string().required('Required')
    })


    const onSubmit = values =>{
        console.log('Form data',values)
    }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
            formik =>{
                <Form>
                        <FormikControl control='chakrainput' type='email' label='Email' name='email'/>
                        <FormikControl control='chakrainput' type='password' label='password' name='password'/>
                        <button type='submit' disabled={!formik.isValid}>Submit</button>
                </Form>
            }
        }

    </Formik>
  )
}

export default LoginForm