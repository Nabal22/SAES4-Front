import './css/colors.css';
import './css/App.css';
import './index.css';
import './css/tmp.css';

import SignUp from './SignUp';
import SignIn from './SignIn';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import img from './img/logo.png';

import Cookies from 'universal-cookie';

// Use cookie to store JWT's login token

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const cookies = new Cookies();

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
        <button onClick={() => cookies.remove('token')}> Enlever Cookies</button>
      </header>
        {
          currentForm === "login" ? <SignIn cookies={cookies} onFormSwitch={toggleForm} /> : <SignUp cookies={cookies} onFormSwitch={toggleForm} />
        }
      <footer>
        <span>Text Footer</span>
      </footer>
    </div>
  );

}

export default App;