import React from 'react'
import {Formik} from 'formik'

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
        <form onSubmit={formik.handleSubmit}>
            <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" id="name" name="name" {...formik.getFieldProps('name')}/>
                    {formik.touched.name && formik.errors.name?<div className="error">{formik.errors.name}</div>:null}
            </div>
            

            <div className='form-control'>
                    <label htmlFor = 'email'>Email</label>
                    <input type='email' name='email' id='email' {...formik.getFieldProps('email')}/>
                    {formik.touched.email && formik.errors.email?<div className="error">{formik.errors.email}</div>:null}

            </div>
            

            <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <input type="text" id="channel" name="channel" {...formik.getFieldProps('channel')}/>
                    {formik.touched.channel && formik.errors.channel?<div className="error">{formik.errors.channel}</div>:null}

            </div>
            


            <button type='submit'>Submit</button>
        </form>


    </Formik>
  )
}
export default YouTubeForm