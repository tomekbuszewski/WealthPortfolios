import * as React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter } from 'react-router-dom';

import Portfolios from './';

import data from '@mocks/portfolios';

describe ('Portfolios tests', () => {
  it ('should match snapshot', () => {
    const component = renderer.create(<HashRouter>
      <Portfolios
        items={data}
      />
    </HashRouter>);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
