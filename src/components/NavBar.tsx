import './styles.css';

import { AppBar, InputBase, Toolbar, Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Issue, Item, Markdown, Service } from 'git-cms-service';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { config } from '../configs';

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
          <RouterLink to={config.router.home} className="nav-title">
            <Typography variant="h5" noWrap>
              {data.title?.raw}
            </Typography>
          </RouterLink>

          <div className="nav-search">
            <div className="nav-search-icon">
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: 'nav-input-root',
                input: 'nav-input',
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  }

  private async _load() {
    const item = await Service.findNav();
    this.setState({ item });
  }
}
