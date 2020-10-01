import './assets/styles/main.css';

import { Service } from 'git-cms-service';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { config } from './configs';
import { AuthPage, HomePage } from './pages';

export class App extends React.PureComponent {
  constructor(props: Readonly<any>) {
    super(props);
    Service.init(config.service);
  }

  public render() {
    const {home, auth} = config.router;
    return (
      <HashRouter>
        <Switch>
          <Route path={auth} component={AuthPage} />
          <Route path={home} component={HomePage} />
        </Switch>
      </HashRouter>
    );
  }
}

///////////////////////////////////////////////////////////////////

// https://gist.github.com/boganegru/a4da0b0da0b1233d30b10063b10efa8a
// https://github.com/rexxars/react-markdown#node-types
