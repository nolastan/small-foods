import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {InstantSearch, Hits, SearchBox, Highlight, RefinementList,
  CurrentRefinements, ClearAll, PoweredBy, Configure}
  from 'react-instantsearch/dom';

function Search() {
  return (
    <div className="container">
      <CurrentRefinements/>
      <ClearAll/>
      <SearchBox />
      <RefinementList attributeName="category" />
      <Hits hitComponent={Product} />
      <PoweredBy />
    </div>
  );
};

function freeShippingStyle(amount){
  if (amount == "$0") {
    return "shipping-fee free-shipping"
  } else {
    return "shipping-fee"
  }
}

function Product({hit}) {

  return (
    <a href={hit.url} className="card" target="_blank">
      <img src={"http://logo.clearbit.com/" + hit.url} />
      <div className="details">
        <h3>
          <Highlight attributeName="name" hit={hit} />
        </h3>
        <div className={ freeShippingStyle(hit.shipping_fee) }>
          ${hit.shipping_fee} shipping
        </div>
        <div>
          Free shipping on orders over ${hit.free_ship_min}.
        </div>
      </div>
    </a>
  );
};

const App = () =>
  <InstantSearch
    appId="25FP8A4DOG"
    apiKey="8af649249ad11a64f1d74c5321223af4"
    indexName="brands"
  >
    <Search/>
    <Configure hitsPerPage={500} />
  </InstantSearch>

export default App;
