import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import './App.css';
import Brand from './Brand';
import Article from './Article';
import Header from './Header';
import BrandCard from './BrandCard';
import styled from 'styled-components';

import {InstantSearch, Hits, SearchBox, Highlight, RefinementList,
  CurrentRefinements, PoweredBy, Configure}
  from 'react-instantsearch/dom';

function Search() {
  return (
    <div className="container">
      <CurrentRefinements/>
      <SearchBox />
      <RefinementList attributeName="category" />
      <Hits hitComponent={BrandResult} />
      <PoweredBy />
    </div>
  );
};

function BrandResult({hit}) {
  return <BrandCard brand={hit} />;
};

const Tagline = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #000000;
  margin: 2ex 0;
`

class App extends Component {

  render() {
    return (
      <main>
        <Header />
        <Route path="/brand/:brandId" component={Brand} />
        <Route path="/article/:listName" component={Article} />
        <Route exact={true} path="/" render={() => (
          <div className="search">
            <Tagline>Support the brands you love.</Tagline>
            <InstantSearch
              appId="25FP8A4DOG"
              apiKey="8af649249ad11a64f1d74c5321223af4"
              indexName="brands"
            >
              <Search/>
              <Configure hitsPerPage={500} />
            </InstantSearch>
          </div>
      )} />
      </main>
    );
  }
}

export default App;
