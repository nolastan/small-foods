import React, { Component } from 'react';
import styled from 'styled-components';

const ReasonItem = styled.li`
  margin: 1ex 0;
`

class Reasons extends Component {

  bcorp() {
    if(this.props.brand.badges && this.props.brand.badges.includes('bcorp')) {
      return (
        <ReasonItem>
          <p><strong>Certified B-Corp</strong></p>
          <p>B Corporations are for-profit companies that meet rigorous standards of social and environmental performance, accountability, and transparency.</p>
        </ReasonItem>
      )
    }
  }

  employeeOwned() {
    if(this.props.brand.badges && this.props.brand.badges.includes('employee_owned')) {
      return (
        <ReasonItem>
          <p><strong>Employee-Owned</strong></p>
          <p>A majoriy of shares are owned by employees of the company.</p>
        </ReasonItem>
      )
    }
  }

  organic() {
    if(this.props.brand.badges && this.props.brand.badges.includes('organic')) {
      return (
        <ReasonItem>
          <p><strong>USDA Certified Organic</strong></p>
          <p>Fosters cycling of resources, promotes ecological balance, and conserves biodiversity.</p>
        </ReasonItem>
      )
    }
  }

  nonGmo() {
    if(this.props.brand.badges && this.props.brand.badges.includes('non_gmo')) {
      return (
        <ReasonItem>
          <p><strong>Non-GMO Project Verified</strong></p>
          <p>Avoids using genetically modified organisms.</p>
        </ReasonItem>
      )
    }
  }

  freeShipping() {
    if(this.props.brand.free_ship_min) {
      return (
        <ReasonItem>
          <p><strong>Free Delivery</strong></p>
          <p>All orders over ${this.props.brand.free_ship_min} ship free.</p>
        </ReasonItem>
      )
    }
  }

  render() {
    return (
      <ul>
        {this.employeeOwned()}
        {this.bcorp()}
        {this.freeShipping()}
        {this.organic()}
        {this.nonGmo()}
      </ul>
    )
  };
}

export default Reasons;
