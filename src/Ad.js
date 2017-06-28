import React, { Component } from 'react';
import styled from 'styled-components';

const AdBanner = styled.a`
  text-align: center;
  display: block;
  margin: 4ex 1em;
`

class Ad extends Component {
  render() {
    return (
      <AdBanner href="http://thrv.me/nolstan">
        Order {this.props.brand.name} from Thrive Market.
      </AdBanner>
    );
  }
}

export default Ad;
