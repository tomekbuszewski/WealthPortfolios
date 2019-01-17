import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { ROUTES } from '@config';

import Header from '@src/components/Header';

// Routes
import MainPage from '@src/views/MainPage';
import Portfolios from '@src/containers/Portfolios';
import Portfolio from '@src/containers/Portfolio';
import CreatePortfolio from '@src/containers/CreatePortfolio';
import NotFound from '@src/views/NotFound';

const App = () => (
  <HashRouter>
    <React.Fragment>
      <Header />
      <main className="container">
        <Switch>
          <Route path={ROUTES.INDEX} component={MainPage} exact />
          <Route path={ROUTES.PORTFOLIOS} component={Portfolios} exact />
          <Route path={`${ROUTES.PORTFOLIOS}:id`} component={Portfolio} />
          <Route path={ROUTES.CREATE_PORTFOLIO} component={CreatePortfolio} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </React.Fragment>
  </HashRouter>
);

export { App };
export default hot(App);
