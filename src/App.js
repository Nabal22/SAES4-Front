import './css/colors.css';
import './css/App.css';
import './index.css';
import './css/tmp.css';

import Cookies from 'universal-cookie';
import SignUp from './SignUp';
import SignIn from './SignIn';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import img from './img/logo.png';

const cookies = new Cookies();

// const headers = new Headers();
// headers.append("Authorization", `Bearer ${token}`);
// fetch("http://localhost:8080/api/sondage/get-all", {
//   headers: headers
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error("There was a problem with the fetch operation:", error);
//   });


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