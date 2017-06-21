import React, { Component } from 'react';
import bcorp_logo from './b-corp.png';
// import './Brand.css';


class Brand extends Component {

  state = {users: []}

  componentDidMount() {
    fetch('/users?uid=60')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="Brand">
        <h3>{this.state.users.name}</h3>
      </div>
    );
  }
}

export default Brand;
