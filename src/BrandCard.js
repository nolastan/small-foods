import React, { Component } from 'react';
import Badges from './Badges'

class BrandCard extends React.Component {

  freeShipMin() {
    if(this.props.brand.free_ship_min) {
      return (
        <dl>
          <dd>${this.props.brand.free_ship_min}+</dd>
          <dt>Ships free</dt>
        </dl>
      )
    }
  }

  shippingFee() {
    if(this.props.brand.shipping_fee) {
      var amount = this.props.brand.shipping_fee == 0 ? "Free" : this.props.brand.shipping_fee
      return (
        <dl>
          <dd>${amount}</dd>
          <dt>Shipping</dt>
        </dl>
      )
    }
  }

  render() {
    return(
      <a>
        <div className="logo">
          <img src={this.props.brand.logo_url} alt={this.props.brand.name + " logo"} />
        </div>
        <div className="details">
          <h3>{this.props.brand.name}</h3>
          <Badges badges={this.props.brand.badges} />
          <p className="products">
            {this.props.brand.products && this.props.brand.products.join(", ")}
          </p>
          <div className="shipping">
            {this.shippingFee()}
            {this.freeShipMin()}
          </div>
        </div>
      </a>
    )
  };
}

export default BrandCard;
