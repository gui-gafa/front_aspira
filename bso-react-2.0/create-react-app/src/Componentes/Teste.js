import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://api-codcta.herokuapp.com/api/v1/constructions`, {headers:  {'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'}})
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

//   axios.get('my/url', {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.object_name}</li>)}
      </ul>
    )
  }
}