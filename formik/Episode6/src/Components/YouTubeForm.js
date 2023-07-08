import React from 'react'
import {useFormik} from 'formik'

function YouTubeForm() {

    const formik = useFormik({
        initialValues:{
            name:'khushboo',
            email:'',
            channel:''
        },
        onSubmit: values=>{
            console.log("Form Values",values)
        }
    });
    // console.log("values:", formik.values)
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>

            <label htmlFor = 'email'>Email</label>
            <input type='email' name='email' id='email' onChange={formik.handleChange} value={formik.values.email}/>

            <label htmlFor='channel'>Channel</label>
            <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel}/>

            <button type='submit'>Submit</button>
        </form>


    </div>
  )
}

export default YouTubeForm