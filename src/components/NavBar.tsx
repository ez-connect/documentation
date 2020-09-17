import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Issue, Item, Markdown, Service } from 'git-cms-service';
import React from 'react';

export class NavBar extends React.PureComponent {
  public state: Item<Issue> = {};

  public componentDidMount() {
    this._load();
  }

  public render() {
    const { item } = this.state;
    const data = Markdown.parse(item?.body);
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            {data.title?.raw}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }

  private async _load() {
    const item = await Service.findNav();
    this.setState({ item });
  }
}
