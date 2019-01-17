import * as React from 'react';
import Props from 'prop-types';

/**
 * The simplest and most straightforward form validation I came up with
 * without creating any sophisticated system.
 */
class FormController extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      valid: false,
    };
  }

  static get propTypes() {
    return {
      children: Props.arrayOf(Props.oneOfType([Props.element, Props.bool])).isRequired,
    };
  }

  componentDidUpdate() {
    this.validate();
  }

  validate() {
    const { children } = this.props;

    const valid = React.Children.map(children, (item) => {
      const hasValue = !!item && typeof item.props.value === 'string';

      if (hasValue) {
        return item.props.value.length > 0;
      }

      return true;
    }).every(r => r === true);

    this.setState({ valid });
  }

  displayChildren() {
    const { children } = this.props;
    const { valid } = this.state;

    return React.Children.map(children, (child) => {
      const isButton = !!child && child.type === 'button' && child.props.type === 'submit';

      if (isButton) {
        return valid ? child : (
          <p className="notification is-primary subtitle is-6">Please fill all the fields to submit form</p>
        );
      }

      return child;
    });
  }

  render() {
    return (
      <form>
        {this.displayChildren()}
      </form>
    );
  }
}

export default FormController;
