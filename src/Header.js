import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const AppHeader = styled.header`
  display: flex;
  background: #FEFEFE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  height: 48px;
`

const HomeLink = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 32px;
`

const Why = styled.a`
  text-align: right;
  line-height: 48px;
  margin-right: 12px;
`

const AppTitle = styled.h1`
  font-weight: bold;
`

const AppLogo = styled.div`
  flex: 0 0 48px;
  line-height: 48px;
  color: white;
  background: #2F80ED;
  text-align: center;
  margin-right: 8px;
`

class Header extends Component {
  render() {
    return (
      <AppHeader>
        <HomeLink to="/">
          <AppLogo>♥</AppLogo>
          <AppTitle>Kangaroo</AppTitle>
        </HomeLink>
        <Why href="https://medium.com/@stan/how-to-order-whole-foods-online-today-b1bfe3e16720">Why?</Why>
      </AppHeader>
    );
  }
}

export default Header;
