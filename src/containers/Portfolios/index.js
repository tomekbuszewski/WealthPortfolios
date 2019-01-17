import * as React from 'react';
import Communication from '@src/services/Communication';

import Loader from '@src/components/Loader';
import View from '@src/views/Portfolios';

import {
  ENDPOINTS,
  ROUTES,
} from '@config';

class Portfolios extends React.Component {
  static createModel(data) {
    return data.map(item => ({
      ...item,
      key: `${item.clientName}-${item.name}`,
      to: `${ROUTES.PORTFOLIOS}${item.id}`,
    }));
  }

  constructor(props) {
    super(props);

    this.fetch = new Communication({
      url: ENDPOINTS.PORTFOLIOS,
    });

    this.state = {
      portfolios: [],
    };
  }

  componentDidMount() {
    this.fetch().then(({ data }) => this.setState({
      portfolios: Portfolios.createModel(data),
    }));
  }

  render() {
    const { portfolios } = this.state;
    return portfolios.length > 0
      ? <View items={portfolios} />
      : <Loader />;
  }
}

export default Portfolios;
