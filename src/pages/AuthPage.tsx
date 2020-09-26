import { Logger, Rest, Service } from 'git-cms-service';
import React from 'react';

export class AuthPage extends React.PureComponent {
  public static ready = true;

  public componentDidMount() {
    this._load();
  }

  public render() {
    return <div>Please wait...</div>;
  }

  private async _load() {
    if (!AuthPage.ready) {
      return;
    }

    const code = window.location.search.replace('?code=', '');
    Logger.warn(code);

    AuthPage.ready = false;

    try {
      const token = await Service.getAccessToken(code);
      Rest.setAuthorization(token);
      Logger.warn(token);
    } catch (err) {
      Logger.warn(err);
    } finally {
      AuthPage.ready = true;
    }
  }
}
