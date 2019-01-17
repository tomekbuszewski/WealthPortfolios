import * as React from 'react';
import renderer from 'react-test-renderer';

import Portfolio from './';

import data from '@mocks/portfolios';

describe ('Portfolio tests', () => {
  it ('should match snapshot with editable false', () => {
    const component = renderer.create(<Portfolio
      editable={false}
      editToggle={() => false}
      data={data[0]}
      onChange={() => false}
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it ('should match snapshot with editable true', () => {
    const component = renderer.create(<Portfolio
      editable={true}
      editToggle={() => false}
      data={data[0]}
      onChange={() => false}
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
