import './styles.css';

import { MenuItem } from '@material-ui/core';
import { Routing } from 'git-cms-service';
import React from 'react';
import { Link } from 'react-router-dom';

import { TocItem } from '../utils';

interface Props {
  items?: TocItem[];
  selected?: number;
  onChanged: (id: number) => void;
}

export class Toc extends React.PureComponent<Props> {
  public render() {
    const { items, selected } = this.props;
    if (!items) {
      return null;
    }

    return items.map((item, index) => {
      const { level, title, to } = item;
      const className = `toc-level-${level}`;
      if (to) {
        return (
          <div key={index} className="toc">
            <Link
              to={Routing.getPostSlug(title, to)}
              onClick={this._onClick(to)}
            >
              <MenuItem className={className} selected={to === selected}>
                {title}
              </MenuItem>
            </Link>
          </div>
        );
      }

      return (
        <div key={index} className="toc">
          <MenuItem className={className}>{title}</MenuItem>
        </div>
      );
    });
  }

  private _onClick = (value: number) => () => {
    this.props.onChanged(value);
  };
}
