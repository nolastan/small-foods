import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import './App.css';
import Brand from './Brand';
import Article from './Article';
import BrandCard from './BrandCard';

import {InstantSearch, Hits, SearchBox, Highlight, RefinementList,
  CurrentRefinements, PoweredBy, Configure}
  from 'react-instantsearch/dom';

function Search() {
  return (
    <div className="container">
      <CurrentRefinements/>
      <SearchBox />
      <RefinementList attributeName="category" />
      <Hits hitComponent={Product} />
      <PoweredBy />
    </div>
  );
};


class ShippingFee extends React.Component {

  freeShippingStyle() {
    if (this.props.amount === 0) {
      return "shipping-fee free-shipping"
    } else {
      return "shipping-fee"
    }
  };

  render() {
    if(this.props.amount != null) {
      return (
        <div className={ this.freeShippingStyle() }>
          <div>${this.props.amount} shipping</div>
        </div>
      )
    } else {
      return <div />
    }
  };
}

class FreeShipping extends React.Component {

  render() {
    if(this.props.amount != null) {
      return (
        <p>
          <small>
            Free shipping on orders over ${this.props.amount}.
          </small>
        </p>
      )
    } else {
      return <div />
    }
  };
}


function Product({hit}) {

  return (
    <div>
    <a href={hit.url} className="card">
      <div className="logo">
        <img src={hit.logo_url} alt={hit.name + " logo"} />
      </div>
      <div className="details">
        <h3>
          <Highlight attributeName="name" hit={hit} />
        </h3>
        <ShippingFee amount={hit.shipping_fee} />
        <p><Highlight attributeName="description" hit={hit} /></p>
        <FreeShipping amount={hit.free_ship_min} />
      </div>
      <Link to={`/brand/${hit.uid}`} className="info">info</Link>
    </a>
    </div>
  );
};

class App extends Component {

  render() {
    return (
      <main>
        <Route path="/brand/:brandId" component={Brand} />
        <Route path="/article/:listName" component={Article} />
        <div className="search">
          <Route exact={true} path="/" render={() => (
            <InstantSearch
              appId="25FP8A4DOG"
              apiKey="8af649249ad11a64f1d74c5321223af4"
              indexName="brands"
            >
              <Search/>
              <Configure hitsPerPage={500} />
            </InstantSearch>
          )} />
        </div>
      </main>
    );
  }
}

export default App;
