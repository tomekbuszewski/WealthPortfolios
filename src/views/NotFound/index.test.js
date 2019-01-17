import * as React from 'react';
import renderer from 'react-test-renderer';

import NotFound from './';

describe ('NotFound tests', () => {
  it ('should match snapshot', () => {
    const component = renderer.create(<NotFound />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
