import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'

import * as Yup from 'yup'

// Error message -takes care of Field visited an error is there 
//Formik -wrapping entire form under Formik Component -accepts initialValues ,validationSchema and onsubmit handler as props 
//Form-replaces form html tag with the form component  -this will automatically link the onSubmit event witht the formsubmit handler or method passed to the form html element 
//Field-replaces each input field with the Field component ,this field component hooks in to formik using the name attribute ,it will take care of the hndling value ,handling onchange  and onBlur event


const initialValues={
    name:'khushboo',
    email:'',
    channel:''
}

const onSubmit= values=>{
    console.log("Form Values",values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format ').required('Required'),
    channel: Yup.string().required('Required')

})

function YouTubeForm() {
  return (
    <Formik
    initialValues={initialValues}
    validationSchema = {validationSchema}
    onSubmit = {onSubmit}>
        <Form >
            <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field type="text" id="name" name="name" />
                    <ErrorMessage name='name'/>
            </div>
            

            <div className='form-control'>
                    <label htmlFor = 'email'>Email</label>
                    <Field type='email' name='email' id='email' />
                    <ErrorMessage name='email'/>

            </div>
            

            <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field type="text" id="channel" name="channel"/>
                    <ErrorMessage name='channel'/>

            </div>
            


            <button type='submit'>Submit</button>
        </Form>


    </Formik>
  )
}
export default YouTubeForm