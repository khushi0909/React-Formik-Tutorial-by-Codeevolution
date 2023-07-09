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

            
###  