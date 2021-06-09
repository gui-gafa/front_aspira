import React from 'react';
import axios from 'axios';

export default class MedidaPost extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const executed_measure = {
      id: this.state.id
    };

    axios.post(`https://api-codcta.herokuapp.com/api/v1/executed_measures`, { executed_measure }, {headers: {'X_User_Email': 'admin@admin', 
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
            Insira o id da executed_measure:
            <input type="text" id="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}