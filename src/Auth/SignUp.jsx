import React, { useState } from 'react';
import Sondages from '../Sondages';

export const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [password, setPassword] = useState('');
  const [ville, setVille] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');

  const cookies = props.cookies;

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('/authentification/creer-compte', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "email" : email,
            "nom" : nom,
            "prenom" : prenom,
            "password" : password,
            "ville" : ville,
            "dateNaissance" : dateNaissance
          })
        });
        const data = await response.json();
        cookies.set('token',data.token);
      } catch (error) {
        console.error(error);
      }
  };

  if(cookies.get('token')!=null){
    console.log('cookie', cookies.get('token'));
  }
else{
  console.log("no cookie");
  return (
    <form className='form' onSubmit={handleSubmit}>
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
        <label htmlFor="nom">Nom:</label>
        <input
          type="text"
          id="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="prenom">Prénom:</label>
        <input
          type="text"
          id="prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
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
      <div>
        <label htmlFor="ville">Ville:</label>
        <input
          type="text"
          id="ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dateNaissance">Date de naissance:</label>
        <input
          type="date"
          id="dateNaissance"
          value={dateNaissance}
          onChange={(e) => setDateNaissance(e.target.value)}
        />
      </div>
      <button type="submit">Créer un compte</button>
      <button onClick={() => props.onFormSwitch('login')}>Déja un compte ? Clique ici</button>
    </form>

  );
}
  
};

export default SignUp;
