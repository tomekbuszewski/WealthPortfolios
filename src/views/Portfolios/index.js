import * as React from 'react';
import { Link } from 'react-router-dom';
import Props from 'prop-types';

import Section from '@src/components/Section';

const Portfolios = ({ items }) => (
  <Section title="Portfolios">
    <ul>
      {items.map(item => (
        <li key={item.key}><Link to={`${item.to}`}>{item.clientName}</Link></li>
      ))}
    </ul>
  </Section>
);

Portfolios.propTypes = {
  items: Props.arrayOf(Props.shape({
    to: Props.string,
    clientName: Props.string,
  })).isRequired,
};

export default Portfolios;
