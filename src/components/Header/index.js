import * as React from 'react';
import Props from 'prop-types';
import styled from 'styled-components';

import { ROUTES } from '@config';

import Navbar from '@src/containers/Navbar';

const menuItems = [
  { to: ROUTES.INDEX, text: 'Main page' },
  { to: ROUTES.PORTFOLIOS, text: 'Portfolios' },
  { to: ROUTES.CREATE_PORTFOLIO, text: 'Create Portfolio' },
];

const Brand = styled.h1`
  margin: 0 5rem 0 0;
`;

const HeaderContainer = styled.header`
  margin-bottom: 1rem;
  position: relative;
`;

const Header = ({ className, name }) => (
  <HeaderContainer className={`navbar is-dark ${className}`}>
    <div className="container navbar-start">
      <Brand className="navbar-brand navbar-item">{name}</Brand>
      <Navbar items={menuItems} />
    </div>
  </HeaderContainer>
);

Header.propTypes = {
  className: Props.string,
  name: Props.string,
};

Header.defaultProps = {
  className: '',
  name: 'Some Company',
};

export default Header;
