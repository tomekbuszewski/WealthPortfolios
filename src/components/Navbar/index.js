import * as React from 'react';
import { Link } from 'react-router-dom';
import Props from 'prop-types';
import styled from 'styled-components';

const ToggleButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: 0;
`;

const Navbar = ({ active, items, toggle }) => (
  <React.Fragment>
    <nav className={`navbar-menu ${active ? 'is-active' : ''}`}>
      <div className="navbar-start">
        {items.map(item => (
          <Link key={item.text} className="navbar-item" to={item.to}>{item.text}</Link>
        ))}
      </div>
    </nav>
    <ToggleButton type="button" className="navbar-burger" onClick={toggle}>
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </ToggleButton>
  </React.Fragment>
);

Navbar.propTypes = {
  active: Props.bool.isRequired,
  toggle: Props.func.isRequired,
  items: Props.arrayOf(Props.shape({
    to: Props.string,
    text: Props.string,
  })).isRequired,
};

export default Navbar;
