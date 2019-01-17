import * as React from 'react';
import { shallow } from 'enzyme';

import Create from './';

describe('CreatePortfolio tests', () => {
  it ('should have methods defined', () => {
    const c = shallow(<Create />).instance();

    expect(typeof c.submit).toBe('function');
    expect(typeof c.setValue).toBe('function');
    expect(typeof c.resetStatus).toBe('function');
    expect(typeof c.create).toBe('function');
  });

  it ('should properly generate id on start', () => {
    const c = shallow(<Create />).instance();

    expect(typeof c.state.data.id).toBe('number');
  });

  it ('should properly change value', () => {
    const c = shallow(<Create />).instance();
    const event = { target: { name: 'test', value: 'test value'} };

    expect('test' in c.state.data).toBeFalsy();

    c.setValue(event);

    expect('test' in c.state.data).toBeTruthy();
    expect(c.state.data.test).toBe('test value');
  })
});
