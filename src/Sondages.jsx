import React from 'react';

class Sondages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookies : props.cookies,
      sondageList : []
    };
  }

  componentDidMount() {
    const url = 'api/sondage/get-all';
    const token = this.state.cookies.token;

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
          <a className='sondage-link' href={`/sondage/${sondage.id}`} key={i}>
            <div className='sondage-div'>
              <span className='sondage-div-name'>{sondage.nom}</span>
              <span className='sondage-div-nb-questions'>{sondage.nbQuestion} Questions</span>
            </div>
          </a>
        )
      })
    )
  }
}
export default Sondages ;