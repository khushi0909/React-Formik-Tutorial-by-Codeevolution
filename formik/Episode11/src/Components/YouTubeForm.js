import React from 'react'
import {Formik,Form,Field} from 'formik'

import * as Yup from 'yup'


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
                    <Field type="text" id="name" name="name" }/>
                    {formik.touched.name && formik.errors.name?<div className="error">{formik.errors.name}</div>:null}
            </div>
            

            <div className='form-control'>
                    <label htmlFor = 'email'>Email</label>
                    <Field type='email' name='email' id='email' />
                    {formik.touched.email && formik.errors.email?<div className="error">{formik.errors.email}</div>:null}

            </div>
            

            <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <Field type="text" id="channel" name="channel"/>
                    {formik.touched.channel && formik.errors.channel?<div className="error">{formik.errors.channel}</div>:null}

            </div>
            


            <button type='submit'>Submit</button>
        </Form>


    </Formik>
  )
}
export default YouTubeForm