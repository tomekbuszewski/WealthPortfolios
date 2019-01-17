import * as React from 'react';
import renderer from 'react-test-renderer';

import MainPage from './';

describe ('MainPage tests', () => {
  it ('should match snapshot', () => {
    const component = renderer.create(<MainPage />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
