import * as React from 'react';
import Props from 'prop-types';

import Communication from '@src/services/Communication';

import Loader from '@src/components/Loader';
import View from '@src/views/Portfolio';

import { ENDPOINTS } from '@config';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    const { match: { params: { id } } } = this.props;
    this.url = `${ENDPOINTS.PORTFOLIOS}/${id}`;

    this.fetch = new Communication({
      url: this.url,
    });

    this.state = {
      data: undefined,
      editable: false,
      success: null,
    };
  }

  static get propTypes() {
    return {
      match: Props.shape({
        params: Props.shape({
          id: Props.string,
        }),
      }).isRequired,
    };
  }

  componentDidMount() {
    this.fetch().then(({ data }) => this.setState({ data }));
  }

  changeData = (event) => {
    const { name, value } = event.target;
    const { data } = this.state;

    this.setState({
      data: {
        ...data,
        [name]: value,
      },
    });
  }

  toggleEdit = () => {
    const { editable } = this.state;

    this.setState({ editable: !editable }, () => {
      const { editable: newEditable } = this.state;

      if (newEditable === false) {
        this.sendModifications();
      }
    });
  }

  resetStatus = () => {
    setTimeout(() => {
      this.setState({ success: null });
    }, 2000);
  }

  sendModifications() {
    const { data } = this.state;

    const put = new Communication({
      url: this.url,
      data,
      method: 'put',
    });

    put()
      .then(result => this.setState({ success: result.status === 200 }, this.resetStatus))
      .catch(() => this.setState({ success: false }, this.resetStatus));
  }

  render() {
    const { data, editable, success } = this.state;

    return typeof data !== 'undefined'
      ? (
        <View
          data={data}
          editable={editable}
          editToggle={this.toggleEdit}
          onChange={this.changeData}
          success={success}
        />
      )
      : <Loader />;
  }
}

export default Portfolio;
