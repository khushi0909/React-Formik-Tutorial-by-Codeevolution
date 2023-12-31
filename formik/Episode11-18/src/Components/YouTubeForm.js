import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'

import * as Yup from 'yup'

// Error message -takes care of Field visited an error is there 
//Formik -wrapping entire form under Formik Component -accepts initialValues ,validationSchema and onsubmit handler as props 
//Form-replaces form html tag with the form component  -this will automatically link the onSubmit event witht the formsubmit handler or method passed to the form html element 
//Field-replaces each input field with the Field component ,this field component hooks in to formik using the name attribute ,it will take care of the hndling value ,handling onchange  and onBlur event
//ErrorMessage-for error message we use error message component ,which conditionally renders the error corresponding to a form field ,only if the fiels had been visited and if the error exist 

//Field components additonal points 
//1)Field components will pass through any addtional props that you specify ex-placeholder
//2)ABility to render the different element other than the input element ex-text area field you want to add 
const initialValues={
    name:'khushboo',
    email:'',
    channel:'',
    comments:'',
    address:''
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
                    <Field type="text" id="channel" name="channel" placeholder="YouTube Channel Name"/>
                    <ErrorMessage name='channel'/>

            </div>
            <div className='form-control'>
            <label htmlFor='comments'>Comments</label>
            {/* <Field id="comments" name='comments'/>      */}
             {/* //This will render the input elemnt not the text area ,to instruct formik to render it as a text area  we need a add the as prop passing inn the text area  */}

             {/* as prop can accept value either as the input or text area or select orcustom react component as well */}
             {/* Alternatively ,as prop can be replaced with the component prop,though internal implementation slightly differs -stick to using as prop as component prop was deprecated then undeprecated  */}

             {/* 2)Field component use as prop to decide what elemt to render  */}
             {/* 3)we need to render another input elemnt to collect the users address,we could this by the way we are rendering name ,email or channel but there is render props way  */}
            <Field id="comments" as="textarea" name='comments'/>  



            </div>
            
            <div className='form-control'>
                <label htmlFor='address'>Address </label>
                {/* <Field name="address"/>
                 */}
                 <Field>
                    {
                        (props)=>{
                        const {field,form,meta} = props
                            console.log('render props ',props)
                            return( <div>

                                        <input  type='text' id='address' {...field}/>
                                        {meta.touched && meta.error ? <div>{meta.error}</div>: null}
                                </div>)
                        }
                    }
                 </Field>
            </div>

{/* with render props patter we use the function as the children to the component ,so our field compoenent will now have opening an dclosing tags */}

            <button type='submit'>Submit</button>
        </Form>


    </Formik>
  )
}
export default YouTubeForm