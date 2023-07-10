# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### General Things 
        
    // Error message -takes care of Field visited an error is there 
    //Formik -wrapping entire form under Formik Component -accepts initialValues ,validationSchema and onsubmit handler as props 
    //Form-replaces form html tag with the form component  -this will automatically link the onSubmit event witht the formsubmit handler or method passed to the form html element 
    //Field-replaces each input field with the Field component ,this field component hooks in to formik using the name attribute ,it will take care of the hndling value ,handling onchange  and onBlur event
    //ErrorMessage-for error message we use error message component ,which conditionally renders the error corresponding to a form field ,only if the fiels had been visited and if the error exist 
### WHEN THE FORMIK VALIDATION RUNS 

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

### FAST FIELD

//Fast Field component is mainly meant for the optimization ,if form has 30 field and if the form has complex validation rquirements 
// if you write consolelog in address field and in the form change the channel field ,you will notice that every time channel field state chages address field also gets render ,so see what happens witht the fast field component ,if in address you will replace Fiield with FAstField,now if you change the channel field with some typing you can see that no new statement of rndered is logged,but if you change the value of address field itself ,you will see log statements again

//fast Field is the optimized version of the field component ,which intermally implememts the ship component update lifecycle method to block on the additional renders unless there are direct updates to the fastfield form control itself,so if you feel that particular field is independent of the all other fields,then you can use this

//be careful while using FastField -see in doc about the situations

### ERRORMESSAGE
{/* <ErrorMessage name='channel'/> */}
// witht the above line now the error message isnot wrapped in any of the html component ,can check in console ,to do that you need to use the component prop and can set it to any html element also you can even set it to the custom react component 
//Alternatice to above is render props pattern 

### FIELD COMPONENT_RENDERING THE OTHER WAY
     {/* <Field id="comments" name='comments'/>      */}
             {/* //This will render the input element not the text area ,to instruct formik to render it as a text area  we need a add the AS prop passing inn the text area  */}

             {/* as prop can accept value either as the input or text area or select orcustom react component as well */}
             {/* Alternatively ,as prop can be replaced with the component prop,though internal implementation slightly differs -stick to using as prop as component prop was deprecated then undeprecated  */}

             {/* 2)Field component use as prop to decide what elemt to render  */}
             {/* 3)we need to render another input elemnt to collect the users address,we could this by the way we are rendering name ,email or channel but there is render props way  */}
             //Field components will pass through any addtional props that you specify ex-placeholder
            //ABility to render the different element other than the input element ex-text area field you want to add

            
###  FIELD LEVEL VALIDATION
two ways -

1st we pass in the validate prop
2nd we specify the YUP object schema using the validation schema 

bith these props are available on the top at the Formik component 

Formik also allows us to specify the validation function at the field level 

its very similar to th custom validate hook used in OldYouTube Form -it receives automaticall y the values of all fields 

THis is available in fastField as well,now why you will use field level validation over the form level validation-depends on the project,one possible usecasecan be that you want to render your usespace based on JSON that you fetched from an API call,oncce you get the JSON representation of the FORM you can iterate over the objects ,building the validation function in each iteration and assigning it to the validate prop on the field or fast field component

### Manually Triggery -Form and Field Level Validation 

to b able to trigger formik provides the two helper methods and to access these we need to use the render props pattern on the entire form itself

using two methods ,validatefield-it does take name arguments such as "comments" and validateform-it doesnt take any arguments  


if you use these two it was not logging the error in console ,reason being if you check the errors object and touched object it was epty ,condition of touched and error needs to be satisfied efore showing an error 

we have two more helper methods -setFieldTouched -will add that particular field to the touched object and setTouched - will add multiple fields to the touched object 

In setTouchec we have to specify the objects as argument ,which contains all the fields that we want to have touched set to true

one example where we can use this is to check if the user name alread exist in the data base ,so right beside the form field you can add check username button ,that can perform that validation ,you can make use of the field level prop,to check if the username is unique or not 

### Disabling the submit button

the scenarios under which you use this is dependent upon on your requiremen and how you want your user experience to be 

two scenario explaining is
1)disabling the submit button based on the validty of the form state,ie if form state is invalid we will disable the submit button 
2)disabling the submit button when the form submission is in progress


use isValid method from the methods available while using formik 

isValid is the readonly property that is set to true,if the error object is empty ,so it lets us know that the form has no errors at any given time ,we can use this property to disable the submit button 

so at first when isValid condition is applied at the page load ,submit button is not disabled as isvalid at page load is not false ,but some clients may want it to be disabled untill all errors are validated ,to do that  we will
a) add validate onmount prop on the formik component and set it to true 

    validate on mount is the boolean prop

on page load as soon as the form mounts on the DOM formik will run the validations against each field and populate the errors objecct,if errors object is not empty ,isValid is false,if is valid is false ,the form state is invalid  and hence the submit button  is disabled 

DRAWBACK-if you have a form with 20 or 30 fields with complex validations it really doesnt make sense to run all the validation rules,even before the user has typed in the single letter ,so this option is suitable for the form of very few fields with the simple validations 

b) use property dirty in conjusction with isValid property and this basically is a boolean value which indicates ,if atleast one of the form fields value has changed ,since it was intialized

so if you onload form an dcheck dorty value its false and error object are empty ,hen you click on one of the input field and click out ,then error object is populated but the dirty value is still false ,if yuu however change any of the field values to something diferent from what the initial value is ,it gets set to true


DRAWBACK- suppose if you also give intial values to email channel and comments apart from name ,now you will notiice the submit button is disabled,but we know that form state is now valid ,just because i havent changed a form field value ,i am not allowed to submit the form ,to make this submit button enabled ,all you have to do is to change the fields value
so this is based on the assumption that onpage load ,i.e without the user changing any of the form field values ,the form state is always invalid 
if you know for the fact that use will interact with your form and enter values which will never be excactly the same value as the inital values object then you can stick to this option 


## Disabling when the submission is in progress

lets day you have a user registration form ,when you fill details and click on submit ,it will make an api call to the server in the background to register the user ,during this time it is really imp,to disable the submit button,if notuser might end up in clicking the submit button twice or more number of times and this could be even more troublesome,if the form is a checkout form in an e-commerce site ,so the second scenario is to disable the submit btn ,till the background operation completes

we will use property isSubmitting ,this is a boolean property ,which formik will set it to true ,if a form submission has been attenpted ,check if it is true and if yes then disable the submit button 

now when you load submit button is enabled ,when you check the formik methods in console ,now if you ckick on submit and check the first method and last method of formik ,in first isSubmitting is true and will disable the submit button ,then once validation comletes an dif atall there is error (the formik will set isSubmitting to the d=false) and in last formik console isSubmititng is false and hence submit is enabled again 

formik will set isSubmitting to false only when there are errors,but what happens when there are no errors ,the data gets submitted but our submit button is still disabled ,this is intended behaviour as the formik doesnt know when API is going to respond back ,we have to manually st isSubmitting to the false again and the way to do that is ONSUBMIT method

onSubmit receives the second prop onSubmitProps .consolelog and see it inturns provide the methods and we will be using setSubmitting and set it to false ,and in turn this will enable the submit button

In real scenarion you will wait for the api response and the will call the setSubmitting function 

so you can add back previous property 

disabled={!formik.isValid || formik.isSubmitting}

we we make use of two properties from the formik props 


### LOAD SAVED DATA 

if you are workin on small forms like user reg or login ,probably you dont have a need to save data ,but you are dealing with the forms which are large and broken in to pieces with several fields ,you often want to allow the user to save data and come back other time 

In this scenrio aprt from rendering the form we need to fetch the saved data and fill those values to ou form 
here we will not br using saving form data or loading from api 
but will mock loading the data as it is coming from database not an api 

1st step is to define the saved data object ,this has similar structure as initialvalue object 
2nd step add button to lead the saved data-on click of button formik should change data from reading intitial values to the saved values 
change the values of inital values prop on the formik component
add enableReinitializeprop -imp as it decides weather your form can change the initial values after the form has ben initalized once

onemore scenario where you can think ofusing it is the to fetch the select drop-down values from an API in that case you can show the loading indicator till API call is done and once the API call is done update the state variable with the response and only after that is done render the formik component

### RESET FORM DATA 

two scenarios of handling form reset 

1)resetting the form data with a reset button- reset button 
2)resetting the form data after the form submission has completed-we use the submit props on the onSubmit method 