import React from 'react'
import {useFormik} from 'formik'


const initialValues={
    name:'khushboo',
    email:'',
    channel:''
}

const onSubmit= values=>{
    console.log("Form Values",values)
}

const validate = values => {
    // values.name values.email values.channel
    //errors.name errors.email errors.channel   
    //error should be string incdicationg the error 
    //ex erros.name="this foeld is required"
    let errors = {};

    if(!values.name){
        errors.name = 'Required'
    }
    if(!values.email){
        errors.email = "Required"
    }else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){

        errors.email = "Invalid Email Format"
    }
    if(!values.channel){
        errors.channel = "Required"
    }

    return errors;
}

function YouTubeForm() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });
    console.log("values:", formik.values)
    console.log("Form erros",formik.errors)
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