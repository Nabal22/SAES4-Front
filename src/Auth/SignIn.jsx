import React, { useState } from 'react';
import Sondages from '../Sondages';

export const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const cookies = props.cookies;

  if(cookies.get('token')!=null){
    return ( <Sondages token={cookies.get('token')} /> )
  }
  else{
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('/authentification/authentifier', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "email" : email,
            "password" : password,
          })
        });
        const data = await response.json();
        cookies.set('token',data.token);
        return ( <Sondages token={data.token} />);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Se connecter</button>
        </form>
        <button onClick={() => props.onFormSwitch('register')}>Pas encore de compte ? Clique ici</button>
      </div>
    );

  }
};

export default SignIn;