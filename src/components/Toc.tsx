import './styles.css';

import { MenuItem } from '@material-ui/core';
import { Issue, Item, Routing, Service } from 'git-cms-service';
import React from 'react';
import { Link } from 'react-router-dom';

import { Parse } from '../utils';

export class Toc extends React.PureComponent {
  public state: Item<Issue> = {};

  public componentDidMount() {
    this._load();
  }

  public render() {
    const { item } = this.state;
    if (!item) {
      return null;
    }

    const data = Parse.toc(item.body);
    return data.map((e, i) => {
      const { level, title, to } = e;
      const className = `toc-level-${level}`;
      if (to) {
        return (
          <div className="toc">
            <Link
              key={i}
              to={Routing.getPostSlug(title, to)}
            >
              <MenuItem className={className}>{title}</MenuItem>
            </Link>
          </div>
        );
      }

      return (
        <div className="toc">
          <MenuItem key={i} className={className}>
            {title}
          </MenuItem>
        </div>
      );
    });
  }

  private async _load() {
    const item = await Service.findToc();
    this.setState({ item });
  }
}
