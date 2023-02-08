
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
              id : 2,
              questions : 10,
              name : 'Sondage Candidats Mairie',
            },
            {
              id : 3,
              questions : 1,
              name : 'Exclusion de Anase du groupe ?',
            }
          ]
        };  
    }
  
    render () {
      return (
        this.state.sondages.map((sondage,i) =>{
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