import React, { Component } from 'react';
import bcorp_logo from './b-corp.png';
import {Link, Route} from 'react-router-dom'
import './App.css';
import Brand from './Brand';

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

class BCorp extends React.Component {

  render() {
    if(this.props.bcorp) {
      return (
        <img className="bcorp" src={bcorp_logo} alt="B-Corp" />
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
    <Link to={`/brand/${hit.uid}`} className="card">
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
        <BCorp bcorp={hit.b_corp} />
      </div>
    </Link>
  );
};

class App extends Component {

  render() {
    return (
      <main>
        <Route path="/brand/:brandId" component={Brand} />
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
