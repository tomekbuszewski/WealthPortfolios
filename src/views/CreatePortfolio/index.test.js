import * as React from 'react';
import renderer from 'react-test-renderer';

import CreatePortfolio from './';

const dataEmpty = {};
import data from '@mocks/portfolios';

describe ('CreatePortfolio tests', () => {
  it ('should match snapshot with empty data', () => {
    const component = renderer.create(<CreatePortfolio
      onChange={() => false}
      submit={() => false}
      data={dataEmpty}
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it ('should match snapshot with success true', () => {
    const component = renderer.create(<CreatePortfolio
      onChange={() => false}
      submit={() => false}
      data={dataEmpty}
      success={true}
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it ('should match snapshot with success false', () => {
    const component = renderer.create(<CreatePortfolio
      onChange={() => false}
      submit={() => false}
      data={dataEmpty}
      success={false}
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it ('should match snapshot with provided data', () => {
    const component = renderer.create(<CreatePortfolio
      onChange={() => false}
      submit={() => false}
      data={data[0]}
    />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
