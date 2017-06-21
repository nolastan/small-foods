import React, { Component } from 'react';
import bcorp_logo from './b-corp.png';
import './App.css';

import {InstantSearch, Hits, SearchBox, Highlight, RefinementList,
  CurrentRefinements, ClearAll, PoweredBy, Configure}
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
    if (this.props.amount == 0) {
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
    <a href={hit.url} className="card" target="_blank">
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
    </a>
  );
};

class App extends Component {

  state = {users: []}

  componentDidMount() {
    fetch('/users?uid=60')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <InstantSearch
        appId="25FP8A4DOG"
        apiKey="8af649249ad11a64f1d74c5321223af4"
        indexName="brands"
      >
        <div className="App">
          {this.state.users.name} {this.props.location.query}
        </div>
        <Search/>
        <Configure hitsPerPage={500} />
      </InstantSearch>
    );
  }
}

export default App;
