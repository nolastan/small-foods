import React, { Component } from 'react';
import styled from 'styled-components';
import Ad from './Ad.js';
import Reasons from './Reasons.js';
import fire from './fire';

import {PageTitle, SectionTitle} from './styles/Typography';

const Hero = styled.div`
  text-align: center;
`

const BrandDescription = styled.p`
  max-width: 40em;
  margin: 0 auto;
`

const Button = styled.a`
  display: inline-block;
  background: #2F80ED;
  border-radius: 100px;
  padding: 1ex 1em;
  margin: 2ex 0;

  font-weight: bold;
  font-size: 16px;
  color: #F6F7FA;

  &:hover {
    background: #166FE6;
    text-decoration: none;
  }
`
const BrandInfo = styled.div`
  display: flex;
  margin: 4ex 0;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const Qualities = styled.div`
  flex: 1;
`

const Products = styled.div`
  flex: 1;
`

const ProductItem = styled.li`
  display: inline-block;
  margin: 0.5ex 0.5em 0.5ex 0;
  padding: 0.5ex 1em;
  border-radius: 100px;
  background: #E1EEFF;
  color: #1756AA;
  border: 1px solid #D4E6FF;
`

class Brand extends Component {


  state = {brand: {}}

  loadBrandById(brandId) {
    var database = fire.database();
    var _this = this;
    return database.ref('/' + brandId).once('value').then(function(snapshot) {
      var brand = snapshot.val();
      console.log(brand);
      _this.setState({ brand: brand });
    });
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
      <main>
        <Hero>
          <img width="150" src={this.state.brand.logo_url} alt={this.state.brand.name + " logo"} />
          <PageTitle>Order {this.state.brand.name} online</PageTitle>
          <BrandDescription>{this.state.brand.description}</BrandDescription>
          <Button target="_blank" href={this.state.brand.url}>Shop Now</Button>
        </Hero>

        <BrandInfo>
          <Qualities>
            <SectionTitle>Reasons to love {this.state.brand.name}</SectionTitle>
            <Reasons brand={this.state.brand} />
          </Qualities>
          <Products>
            <SectionTitle>Products</SectionTitle>
            <ul>
              {this.state.brand.products && this.state.brand.products.map(p =>
                <ProductItem key={p}>{p}</ProductItem>
              )}
            </ul>
          </Products>
        </BrandInfo>

        <Ad brand={this.state.brand} />
      </main>
    );
  }
}

export default Brand;
