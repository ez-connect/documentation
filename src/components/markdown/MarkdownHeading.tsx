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
      <Typography gutterBottom variant={variant}>
        {children}
      </Typography>
    );
  }
}
