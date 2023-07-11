import React from 'react'
import Input from './Input'
import TextArea from './TextArea'
import Select from './Select'
import Radio from './Radio'
import CheckboxGroup from './CheckboxGroup'
import Datepicker from './Datepicker'
import ChakraInput from './ChakraInput'

function FormikControl(props) {

  const {control,...rest} = props

  switch(control){
        case 'input': return <Input {...rest}/>
            case 'textarea': return <TextArea {...rest}/>
                case 'select':return <Select {...rest}/>
                    case 'radio':return <Radio {...rest}/>
                        case 'checkbox': return <CheckboxGroup {...rest} />
                            case 'date':return <Datepicker {...rest}/>
                            case 'chakrainput' : return <ChakraInput {...rest}/>
                                default : return null
  }
}

export default FormikControl