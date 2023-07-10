import React from 'react'
import {Formik,Form,Field,ErrorMessage,FieldArray,FastField} from 'formik'

import * as Yup from 'yup'
import TextError from './TextError'
import { useState } from 'react'

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
    address:'',
    social:{
        facebook:"",
        twitter:" "
    },
    phoneNumbers:['',''],
    phNumbers:['']
}

const savedValues={
    name:'khushboo',
    email:'k@ex.com',
    channel:'sjjsjs',
    comments:'welcome to formikk',
    address:'lego street 7',
    social:{
        facebook:"",
        twitter:" "
    },
    phoneNumbers:['',''],
    phNumbers:['']
}

const onSubmit= (values,onSubmitProps)=>{
    console.log("Form Values",values)
    console.log('submit props ',onSubmitProps)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm(initialValues)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format ').required('Required'),
    channel: Yup.string().required('Required')

})

const validateComments = value =>{
    let error
    if(!value){
        error ='Required'
    }
    return error
}
function YouTubeForm() {

    const [formValues ,setFormValues] = useState(null)
  return (
    <Formik
    initialValues={formValues || initialValues}
    validationSchema = {validationSchema}
    onSubmit = {onSubmit}
    enableReinitialize
    // validateOnMount
    >
        {
            (formik)=>{
                console.log('Formik Prop',formik)
                    return (
                        <Form >
                        <div className='form-control'>
                                <label htmlFor='name'>Name</label>
                                <Field type="text" id="name" name="name" />
                                <ErrorMessage name='name' component='div'/>
                        </div>
                        
            
                        <div className='form-control'>
                                <label htmlFor = 'email'>Email</label>
                                <Field type='email' name='email' id='email' />
                                <ErrorMessage name='email' component= {TextError}/>
            
                        </div>
                        
            
                        <div className='form-control'>
                                <label htmlFor='channel'>Channel</label>
                                <Field type="text" id="channel" name="channel" placeholder="YouTube Channel Name"/>
                                <ErrorMessage name='channel'>
                                    {
                                        (errorMsg)=> <div className='error'>{errorMsg}</div>
                                    }
                                </ErrorMessage>
            
                        </div>
                        <div className='form-control'>
                        <label htmlFor='comments'>Comments</label>
                        {/* <Field id="comments" name='comments'/>      */}
                         {/* //This will render the input element not the text area ,to instruct formik to render it as a text area  we need a add the AS prop passing inn the text area  */}
            
                         {/* as prop can accept value either as the input or text area or select orcustom react component as well */}
                         {/* Alternatively ,as prop can be replaced with the component prop,though internal implementation slightly differs -stick to using as prop as component prop was deprecated then undeprecated  */}
            
                         {/* 2)Field component use as prop to decide what elemt to render  */}
                         {/* 3)we need to render another input elemnt to collect the users address,we could this by the way we are rendering name ,email or channel but there is render props way  */}
                        <Field 
                        id="comments"
                         as="textarea" name='comments' validate={validateComments}/>  
                         <ErrorMessage name='comments' component={TextError}/>
                        </div>
                        
                                    <div className='form-control'>
                                            <label htmlFor='facebook'>Facebook Profile</label>
                                            <Field name='social.facebook' id='facebook' type='text'/>
            
                                    </div>
            
                                    <div className='form-control'>
                                            <label htmlFor='twitter'>Twitter Profile</label>
                                            <Field name='social.twitter' id='twitter' type='text'/>
            
                                    </div>
                                    
                                    <div className='form-control'>
                                        <label htmlFor='primaryPh'>Primary phone number</label>
                                        <Field type='text' id='primaryPh' name='phoneNumbers[0]'/>
             
                                    </div>
            
                                    <div className='form-control'>
                                        <label htmlFor='secondaryPh'>Secondary phone number</label>
                                        <Field type='text' id='secondaryPh' name='phoneNumbers[1]'/>
             
                                    </div>
            
                                    <div className='form-control'>
                                            <label>List of phone numbers</label>
                                            <FieldArray name='phNumbers'>
                                                {
                                                    (fieldArrayProps)=>{
                                                        console.log('FielsArrayProps',fieldArrayProps)
                                                        const {push,remove,form} = fieldArrayProps
                                                        const {values} = form
                                                        const {phNumbers} = values
            
                                                        // console.log('Form Errors',form.errors)
                                                        return <div>
                                                                {
                                                                    phNumbers.map((phNumber,index)=>(
                                                                        <div key={index}>
                                                                            <Field name={`phNumbers[${index}]`}/>
                                                                            {
                                                                                index>0 && <button type='button' onClick={()=>remove(index)}>-</button>
                                                                            }
                                                                            
                                                                            <button type='button' onClick={()=> push('')}>+</button>
            
                                                                        </div>
                                                                    )
            
                                                                    )
                                                                }
            
                                                        </div>
            
                                                    }
                                                }
            
                                            </FieldArray>
            
                                    </div>
                                    {/* <button type='submit' onClick={()=> formik.validateField('comments')}>Validate comments </button>
                                    <button type='submit' onClick={()=> formik.validateForm()}>Validate All</button>
                                    <button type='submit' onClick={()=> formik.setFieldTouched('comments')}>Visit Fields  </button>
                                    <button type='submit' onClick={()=> formik.setTouched({
                                        name:true,
                                        email:true,
                                        chanel:true,
                                        comments:true,
                                    })}>Validate All</button> */}
                        <button type='button' onClick={()=> setFormValues(savedValues)}>Load saved data</button>
                        <button type='reset'>Reset</button>
                        <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                    </Form>
            
                    )
            }
        }
       

    </Formik>
  )
}
export default YouTubeForm

{/* <ErrorMessage name='channel'/> */}
// witht the above line now the error message isnot wrapped in any of the html component ,can check in console ,to do that you need to use the component prop and can set it to any html element also you can even set it to the custom react component 
//Alternatice to above is render props pattern 


//Fast Field component is mainly meant for the optimization ,if form has 30 field and if the form has complex validation rquirements 
// if you write consolelog in address field and in the form change the channel field ,you will notice that every time channel field state chages address field also gets render ,so see what happens witht the fast field component ,if in address you will replace Fiield with FAstField,now if you change the channel field with some typing you can see that no new statement of rndered is logged,but if you change the value of address field itself ,you will see log statements again

//fast Field is the optimized version of the field component ,which intermally implememts the ship component update lifecycle method to block on the additional renders unless there are direct updates to the fastfield form control itself,so if you feel that particular field is independent of the all other fields,then you can use this

//be careful while using FastField -see in doc about the situations


// WHEN THE FORMIK VALIDATION RUNS 

// Imp -Formik run validation after any change event in the form ,suppose you write something in channel and check console you will see that erros are populating
//Second scenario -if you click inside the channel and then click outside ,you can see the erros are populated again ,i.e formik runs validation after every blurred event 


//3rd scenario -when you directly click o submit object ,without clicking on any of the field ,so whenever the form sbmission is attempeted the formik runs the validation 


// if the validatioon doesnt pass for all the fiels the onsubmit handler never gets executed 


// formik will take care of passing all the validation rules 

// three scenarios when validation runs is :-
// onChange 
// Onsubmit 
// onblur 

//Sometimes you may not want formik to run automatically the validation for us ,so formik provides the two props to control the first two scenarios 

// onFOrmik component you can specify a prop validate on change and set it to false 

//Also you can pass validate onBlur 