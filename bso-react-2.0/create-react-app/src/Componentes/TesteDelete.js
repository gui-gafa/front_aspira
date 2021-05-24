import React from 'react';
import axios from 'axios';

export default class PersonDelete extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`https://api-codcta.herokuapp.com/api/v1/constructions/105`, {headers: {'X_User_Email': 'admin@admin', 'X_User_Token': '9BTpiiUNG61StitJdoqn'}})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}