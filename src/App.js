import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {InstantSearch, Hits, SearchBox, Highlight, RefinementList, CurrentRefinements, ClearAll} from 'react-instantsearch/dom';

function Search() {
  return (
    <div className="container">
      <CurrentRefinements/>
      <ClearAll/>
      <SearchBox />
      <RefinementList attributeName="category" />
      <Hits hitComponent={Product} />
    </div>
  );
};

function Product({hit}) {
  return (
    <div style={{marginTop: '10px'}}>
      <span className="hit-name">
        <Highlight attributeName="name" hit={hit} />
      </span>
    </div>
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
