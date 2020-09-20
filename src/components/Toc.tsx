import './styles.css';

import { MenuItem } from '@material-ui/core';
import { Routing } from 'git-cms-service';
import React from 'react';
import { Link } from 'react-router-dom';

import { TocItem } from '../utils';

interface Props {
  items?: TocItem[];
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
}
