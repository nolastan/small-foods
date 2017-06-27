import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BrandCard from './BrandCard';

class Brand extends Component {

  state = {brand: {}}

  loadBrandById(brandId) {
    // fetch(`/brands?uid=${brandId}`)
    fetch(`https://guarded-ridge-90726.herokuapp.com/brands?uid=${brandId}`)
      .then(res => res.json())
      .then(brand => this.setState({ brand }));
  }

  componentWillMount() {
    this.loadBrandById(this.props.match.params.brandId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.brandId !== nextProps.match.params.brandId) {
        this.loadBrandById(nextProps.match.params.brandId);
    }
  }

  render() {
    return (
      <div className="Brand">
        <BrandCard brand={this.state.brand} />
        <img src={this.state.brand.logo_url} /><br />
        <h3>Order from {this.state.brand.name} online</h3>
        <p>You can purchase directly from {this.state.brand.name} and have your
        items delivered to your home. Shipping is only ${this.state.brand.shipping_fee} and if
        you spend over ${this.state.brand.free_ship_min} {this.state.brand.name} will ship free!</p>
        <h4>About {this.state.brand.name}</h4>
        <p>{this.state.brand.description}</p>
        <a href={this.state.brand.url}>Start shopping →</a>
        <Link to='/'>back</Link>
      </div>
    );
  }
}

export default Brand;
