import './css/colors.css';
import './css/App.css';
import './index.css';
import './css/tmp.css';

import SignUp from './SignUp';
import SignIn from './SignIn';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import img from './img/logo.png';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <header className='header-vos-sondages'>
          <div className='img-wrapper wrap-logo'>
            <img
          src={img}
          alt='logo'
          />
        </div>
        <h1>
          Vos sondages
        </h1>
        {/* <User name={'alban'}
        /> */}
      </header>
        {
          currentForm === "login" ? <SignIn onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
        }
      <footer>
        <span>Text Footer</span>
      </footer>
    </div>
  );

}

export default App;