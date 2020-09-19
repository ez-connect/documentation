import React from 'react';

import { NavBar, Toc } from '../components';

export class HomePage extends React.PureComponent {
  public render() {
    return (
      <>
        <NavBar />
        <Toc />
      </>
    );
  }
}
