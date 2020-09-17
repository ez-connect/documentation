import React from 'react';

import { NavBar } from '../components';

export class HomePage extends React.PureComponent {
  public render() {
    return (
      <div style={{ background: 'red' }}>
        <NavBar />
      </div>
    );
  }
}
