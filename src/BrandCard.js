import React, { Component } from 'react';
import Badges from './Badges'
import styled from 'styled-components';
import {Link, Route} from 'react-router-dom'
import {InstantSearch, Hits, SearchBox, Highlight}
  from 'react-instantsearch/dom';

const Card = styled(Link)`
  display: flex;

  width: 100%;
  height: 96px;

  margin: 16px 0;
  padding: 12px;

  background: #FEFEFE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  text-decoration: none;

  transition: box-shadow 0.1s, background 0.1s;

  &:hover {
    background: #FFF;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.07);
  }
`;

const Logo = styled.div`
  flex: 0 0 72px;
  max-height: 72px;
  text-align: center;
  align-self: center;
`;

  const LogoImage = styled.img`
    max-width: 100%;
    max-height: 100%;
  `;

const Details = styled.div`
  flex: 1;
  margin: 0 12px;
`;

const Name = styled.h3`
  font-weight: 300;
  font-size: 22px;
  letter-spacing: -0.44px;

  color: #000000;
`;

const Products = styled.p`
  font-weight: 300;
  font-size: 16px;
  letter-spacing: -0.32px;
  color: #7D7D7D;
`;

const Shipping = styled.div`
  align-self: center;
  display: flex;
  flex: 0;
`;

  const Amount = styled.dl`
    text-align: center;
    align-self: center;
    margin: 0 12px;
  `;

    const Value = styled.dd`
      font-size: 18px;
      color: #393939;
      margin: 0;
    `;

    const Label = styled.dt`
      font-size: 8px;
      text-transform: uppercase;
      color: #8A8A8A;
    `;

class BrandCard extends React.Component {

  freeShipMin() {
    if(this.props.brand.free_ship_min) {
      return (
        <Amount>
          <Value>${this.props.brand.free_ship_min}+</Value>
          <Label>Ships&nbsp;free</Label>
        </Amount>
      )
    }
  }

  shippingFee() {
    if(this.props.brand.shipping_fee) {
      var amount = this.props.brand.shipping_fee == 0 ? "Free" : this.props.brand.shipping_fee
      return (
        <Amount>
          <Value>${amount}</Value>
          <Label>Shipping</Label>
        </Amount>
      )
    }
  }

  render() {
    return(
      <Card to={`/brand/${this.props.brand.uid}`}>
        <Logo>
          <LogoImage src={this.props.brand.logo_url} alt={this.props.brand.name + " logo"} />
        </Logo>
        <Details>
          <Name>
            <Highlight attributeName="name" hit={this.props.brand} />
          </Name>
          <Badges badges={this.props.brand.badges} />
          <Products>
            {this.props.brand.products && this.props.brand.products.join(", ")}
          </Products>
        </Details>
        <Shipping>
          {this.shippingFee()}
          {this.freeShipMin()}
        </Shipping>
      </Card>
    )
  };
}

export default BrandCard;
