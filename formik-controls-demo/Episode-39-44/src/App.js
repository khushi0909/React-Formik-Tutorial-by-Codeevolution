import './App.css';
import EnrollmentForm from './components/EnrollmentForm';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import {Theme,ThemeProvider} from '@chakra-ui.core'

function App() {
  return (
    <ThemeProvider theme ={Theme}>
          <div className="App">
      {/* <LoginForm/> */}
      {/* <RegistrationForm/> */}
      <EnrollmentForm/>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
