import './styles.css';

import { MenuItem } from '@material-ui/core';
import { Routing } from 'git-cms-service';
import React from 'react';
import { Link } from 'react-router-dom';

import { TocItem } from '../utils';

interface Props {
  items?: TocItem[];
  onChanged: (id: number) => void;
}

export class Toc extends React.PureComponent<Props> {
  public render() {
    const { items } = this.props;
    if (!items) {
      return null;
    }

    return items.map((item, index) => {
      const { level, title, to } = item;
      const className = `toc-level-${level}`;
      if (to) {
        return (
          <div className="toc">
            <Link
              key={index}
              to={Routing.getPostSlug(title, to)}
              onClick={this._onClick(to)}
            >
              <MenuItem className={className}>{title}</MenuItem>
            </Link>
          </div>
        );
      }

      return (
        <div className="toc">
          <MenuItem key={index} className={className}>
            {title}
          </MenuItem>
        </div>
      );
    });
  }

  private _onClick = (value: number) => () => {
    this.props.onChanged(value);
  };
}
