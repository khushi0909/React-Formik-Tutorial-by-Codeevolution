import React from 'react'

import {Formik ,Form} from 'formik'
import * as Yup from 'yup'

function FormikContainer() {

    const initalValues = {}
    const validatonSchema = Yup.object({})
    const onSubmit= values =>{
        console.log("Form data",values)
    }
  return (
    <Formik initalValues={initialValues}
            validationSchema = {validationSchema}
            onSubmit={onSubmit} >
                
        {
            formik =><Form>
                <submit type= 'submit'>Submit</submit>
            </Form>
        }
    </Formik>
  )
}

export default FormikContainer