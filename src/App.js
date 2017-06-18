import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {InstantSearch, Hits, SearchBox, Highlight, RefinementList, CurrentRefinements, ClearAll, PoweredBy} from 'react-instantsearch/dom';

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

function Product({hit}) {
  return (
    <a href={hit.url} className="card" target="_blank">
      <img src={"http://logo.clearbit.com/" + hit.url} />
      <span className="hit-name">
        <Highlight attributeName="name" hit={hit} />
      </span>
      <span className="hit-shipping_free">
        {hit.shipping_free} shipping
      </span>
      <span className="hit-free_ship_min">
        Free shipping on orders over {hit.free_ship_min}.
      </span>
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
  </InstantSearch>

export default App;
