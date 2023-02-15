import React, { useState } from 'react';

class Sondages extends React.Component {
    constructor(props) {
      super(props); 
      this.state = {
        token : props.token,
        sondageList : []
      };
    }

    componentDidMount() {
      const url = 'api/sondage/get-all';
      const token = this.state.token;

      fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data =>this.setState({ sondageList: data }))
      .catch(error => console.error(error));
    }
  
    render() {
      return (
        this.state.sondageList.map((sondage,i) =>{
          return(
          <div className='sondage-div'>
            <span className='sondage-div-name'>{sondage.nom}</span>
            <span className='sondage-div-nb-questions'>-- Questions</span>
          </div>
          )
        })
      )
    }
  }
  
  // class User extends React.Component {
  //   constructor(props) {
  //       super(props);   
  //       this.state = {
  //           name : props.name
  //       };  
  //   }
    
  //   render (){
  //     return (
  //       <div className='user-header'>
  //         <i className ="user-header-icon fa-solid fa-user"></i>
  //         <span className='user-header-name'>{this.state.name}</span>
  //       </div>
  //     )
  //   }
  // }

export default Sondages ;