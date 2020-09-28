import './styles.css';

import { Typography } from '@material-ui/core';
import React from 'react';

interface Props {
  level: number;
}

export class MarkdownHeading extends React.PureComponent<Props> {
  public render() {
    const { level, children } = this.props;
    const variant: any = `h${level + 3}`;
    return (
      <Typography gutterBottom variant={variant} className="heading">
        {children}
      </Typography>
    );
  }
}

export class MarkdownParagraph extends React.PureComponent<Props> {
  public render() {
    return <Typography>{this.props.children}</Typography>;
  }
}

export class MarkdownListItem extends React.PureComponent {
  public render() {
    return (
      <li>
        <Typography component="span">{this.props.children}</Typography>
      </li>
    );
  }
}
