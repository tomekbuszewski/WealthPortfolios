import * as React from 'react';

import Communication from '@src/services/Communication';
import { ENDPOINTS } from '@config';

import View from '@src/views/CreatePortfolio';

class CreatePortfolio extends React.Component {
  constructor(props) {
    super(props);

    const id = Math.round(Math.random() * (100 - 10) + 10);
    this.state = {
      data: {
        id, // This should not be required
      },
      success: null,
    };
  }

  setValue = (event) => {
    const { name, value } = event.target;
    const { data } = this.state;

    this.setState({
      data: {
        ...data,
        [name]: value,
      },
    });
  }

  submit = (e) => {
    e.preventDefault();

    this.create();
  }

  resetStatus = () => {
    setTimeout(() => {
      this.setState({ success: null });
    }, 2000);
  }

  create() {
    const { data } = this.state;

    const create = new Communication({
      url: ENDPOINTS.PORTFOLIOS,
      method: 'post',
      data,
    });

    create()
      .then(({ status }) => this.setState({ success: status === 200 }, this.resetStatus))
      .catch(() => this.setState({ success: false }, this.resetStatus));
  }

  render() {
    const { data, success } = this.state;

    return (
      <View
        data={data}
        onChange={this.setValue}
        submit={this.submit}
        success={success}
      />
    );
  }
}

export default CreatePortfolio;
