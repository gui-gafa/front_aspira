import React from 'react';
import axios from 'axios';

export default class PersonPost extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const construction = {
      object_name: this.state.name
    };

    axios.post(`https://api-codcta.herokuapp.com/api/v1/constructions`, { construction }, {headers: {'X_User_Email': 'admin@admin', 
                                                                                  'X_User_Token': '9BTpiiUNG61StitJdoqn', 
                                                                                  'Content-Type': 'application/json'}})
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
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}