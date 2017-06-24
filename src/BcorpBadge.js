import React, { Component } from 'react';
import bcorp_logo from './b-corp.png';

class BcorpBadge extends React.Component {

  render() {
    if(this.props.bcorp) {
      return (
        <img className="bcorp" src={bcorp_logo} alt="B-Corp logo" title="This company is a Certified B-Corporation" />
      )
    } else {
      return <div />
    }
  };
}

export default BcorpBadge;
