import './assets/styles/main.css';

import { Service } from 'git-cms-service';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { config } from './configs';
import { HomePage, PostPage } from './pages';

export class App extends React.PureComponent {
  constructor(props: any) {
    super(props);
    Service.init(config.service);
    // Service.onUnauthorized(this._onUnauthorized);
  }

  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/:id" component={PostPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
