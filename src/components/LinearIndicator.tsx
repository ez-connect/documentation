import { LinearProgress } from '@material-ui/core';
import React, {  } from 'react';

interface Props {
  enabled?: boolean;
}

export class LinearIndicator extends React.PureComponent<Props> {
  public render() {
    const variant = this.props.enabled ? undefined : 'determinate';
    return <LinearProgress variant={variant} value={0} />;
  }
}
