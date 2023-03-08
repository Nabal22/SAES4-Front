import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function Sondage(props) {
  const id = useParams().id;
  const  cookies  = props.cookies;
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = 'api/sondage/get/'+id;
    const token  = cookies.token;
    console.log(token);
    console.log(url);
    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
  }, [id]);

  if (!data) {
    console.log(data);
    return <p>Loading...</p>;
  }
  else{
    console.log(data);
  }

  return (
    <div>
      <h1>Sondage {id}</h1>
      <p>{data.description}</p>
      <ul>
        {data.questions.map(question => (
          <li key={question.id}>{question.texte}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sondage;
