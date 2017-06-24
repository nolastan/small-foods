import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BcorpBadge from './BcorpBadge';

class Article extends Component {

  state = {brands: []}

  loadBrandsByListName(listName) {
    // fetch(`/articles?listName=${listName}`)
    fetch(`https://guarded-ridge-90726.herokuapp.com/articles?listName=${listName}`)
      .then(res => res.json())
      .then(brands => this.setState({brands}));
  }

  componentWillMount() {
    this.loadBrandsByListName(this.props.match.params.listName)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.listName !== nextProps.match.params.listName) {
        this.loadBrandsByListName(nextProps.match.params.listName);
    }
  }

  freeShipText(brand) {
    if(brand.fields.free_ship_min) {
      return (<p>{brand.fields.name} offers free shipping on all orders over ${brand.fields.free_ship_min}!</p>)
    }
  }

  listBrands(brands) {
    var count = 0;
    return brands.map(brand =>
      <section>
        <h2>{++count}. {brand.fields.name}</h2>
        <p>{brand.fields.description}</p>
        {this.freeShipText(brand)}
        <p>Shop {brand.fields.name} online at <a target="_blank" href={brand.fields.url}>{brand.fields.url}</a></p>
      </section>
    )
  }

  render() {
    return (
      <article>
        <h1 style={{textTransform: 'capitalize'}}>{this.state.brands.length || ""} Brands for {this.props.match.params.listName} You Absolutely Must Try</h1>
        <p>Instead of ordering your {this.props.match.params.listName} needs from Amazon, consider ordering directly from these responsible brands.</p>
        {this.state.brands.length > 0 && this.listBrands(this.state.brands)}
      </article>
    );
  }
}

export default Article;
