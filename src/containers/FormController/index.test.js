import * as React from 'react';
import { mount } from 'enzyme';

import Form from './';
import Input from '@src/components/Input';

describe('FormController tests', () => {
  it ('should render children', () => {
    const c = mount(<Form>
      <Input onChange={() => false} label="Test" name="test item" value="test" />
      <button type="submit">Submit</button>
    </Form>);

    expect(c.find('input').exists()).toBeTruthy();
  });

  /**
   * I can't simulate change on input here, since it's not a controlled
   * component in this environment.
   */
  it ('should render button submit only when form is valid', () => {
    const c = mount(<Form>
      <Input onChange={() => false} label="Test" name="test item" value="test" />
      <button type="submit">Submit</button>
    </Form>);

    expect(c.find('button').exists()).toBeFalsy();
    c.setState({ valid: true });
    expect(c.find('button').exists()).toBeTruthy();
  });
});
