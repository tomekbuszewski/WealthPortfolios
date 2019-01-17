import * as React from 'react';
import Props from 'prop-types';

import View from '@src/components/Navbar';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  static get propTypes() {
    return {
      items: Props.arrayOf(Props.shape({
        to: Props.string,
        text: Props.string,
      })).isRequired,
    };
  }

  toggle = () => {
    const { active } = this.state;

    this.setState({
      active: !active,
    });
  }

  render() {
    const { active } = this.state;
    const { items } = this.props;

    return (
      <View active={active} items={items} toggle={this.toggle} />
    );
  }
}

export default Navbar;
