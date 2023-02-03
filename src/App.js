import './css/colors.css';
import './css/App.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import img from './img/logo.png';

class Sondages extends React.Component {
  constructor(props) {
      super(props);   
      this.state = {
          sondages : [{
            id : 1,
            questions : 3,
            name : 'Sondage Aliments',
          },
          {
            id : 1,
            questions : 10,
            name : 'Sondage Candidats Mairie',
          }
        ]
      };  
  }

  render () {
    return (
      this.state.sondages.map((sondage,i) =>{
        console.log(sondage);
        return(
        <div className='sondage-div'>
          <span className='sondage-div-name'>{sondage.name}</span>
          <span className='sondage-div-nb-questions'>{sondage.questions} Questions</span>
        </div>
        )
      })
    )
  }

}

class User extends React.Component {
  constructor(props) {
      super(props);   
      this.state = {
          name : props.name
      };  
  }
  
  render (){
    return (
      <div className='user-header'>
        <i className ="user-header-icon fa-solid fa-user"></i>
        <span className='user-header-name'>{this.state.name}</span>
      </div>
    )
  }
}

function App() {
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
        <User name={'alban'}
        />
      </header>
      <div className='sondages-container'>
        <Sondages 
        />
      </div>
      <footer>
        <span>Text Footer</span>
      </footer>
    </div>
  );
}

export default App;