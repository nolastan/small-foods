import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Brand extends Component {

  state = {brand: {}}

  loadBrandById(brandId) {
    fetch(`/brands?uid=${brandId}`)
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
        <h3>{this.state.brand.name}</h3>
        <p>Shipping costs ${this.state.brand.shipping_fee}.</p>
        <Link to='/'>back</Link>
      </div>
    );
  }
}

export default Brand;
