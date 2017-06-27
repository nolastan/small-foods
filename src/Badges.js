import React, { Component } from 'react';

class Badges extends React.Component {

  bcorp() {
    if(this.props.badges.includes('bcorp')) {
      return (
        <div title="This company is a Certified B-Corporation.">Ⓑ</div>
      )
    }
  }

  employeeOwned() {
    if(this.props.badges.includes('employee_owned')) {
      return (
        <div title="This company is employee-owned.">🤝</div>
      )
    }
  }

  render() {
    if(this.props.badges && this.props.badges.includes('bcorp')) {
      return (
        <span className="badges">
          {this.employeeOwned()}
          {this.bcorp()}
        </span>
      )
    } else {
      return <div />
    }
  };
}

export default Badges;
