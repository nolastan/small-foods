import React, { Component } from 'react';
import styled from 'styled-components';

const BadgeItem = styled.span`
  cursor: help;
  margin-left: 6px;
`;


class Badges extends Component {

  bcorp() {
    if(this.props.badges.includes('bcorp')) {
      return (
        <BadgeItem title="This company is a Certified B-Corporation.">❤️</BadgeItem>
      )
    }
  }

  employeeOwned() {
    if(this.props.badges.includes('employee_owned')) {
      return (
        <BadgeItem title="This company is employee-owned.">🤝</BadgeItem>
      )
    }
  }

  render() {
    if(this.props.badges) {
      return (
        <span>
          {this.employeeOwned()}
          {this.bcorp()}
        </span>
      )
    } else {
      return null;
    }
  };
}

export default Badges;
