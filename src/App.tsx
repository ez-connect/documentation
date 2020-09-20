import './assets/styles/main.css';

import { Box, Grid, Typography } from '@material-ui/core';
import { Issue, Routing, Service } from 'git-cms-service';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { BrowserRouter } from 'react-router-dom';

import { CodeBlock, NavBar, Toc } from './components';
import { LinearIndicator } from './components/LinearIndicator';
import { config } from './configs';
import { Parse, TocItem } from './utils';

interface State {
  ready?: boolean;
  toc?: TocItem[];
  post?: Issue;
}

export class App extends React.PureComponent<any, State> {
  public state: State = {};

  constructor(props: Readonly<any>) {
    super(props);
    Service.init(config.service);
    // Service.onUnauthorized(this._onUnauthorized);
  }

  public componentDidMount() {
    this._load();
  }

  public render() {
    const { ready, toc, post } = this.state;
    return (
      <BrowserRouter>
        <LinearIndicator enabled={!ready} />
        <NavBar />
        <Grid container direction="row">
          <Grid item md={3}>
            <Toc items={toc} onChanged={this._onChanged} />
          </Grid>
          <Grid item md={7}>
            <Box m={1}>
              <ReactMarkdown source={post?.body} renderers={renderers} />
            </Box>
          </Grid>
        </Grid>
      </BrowserRouter>
    );
  }

  private async _load() {
    console.warn(window.location.pathname);
    try {
      this.setState({ ready: false });
      // Table of contents
      const item = await Service.findToc();
      const toc = Parse.toc(item.body);

      this.setState({ toc });

      // Check router
      let id = Routing.getPostIdFromPath(window.location.pathname);
      if (id === 0) {
        // Find first post
        const menu = toc.find((e) => e.to != null);
        if (menu && menu.to) {
          id = menu.to;
        }
      }

      const post = await Service.findOnePost(id);
      this.setState({ post });
    } finally {
      this.setState({ ready: true });
    }
  }

  private _onChanged = async (id: number) => {
    try {
      this.setState({ ready: false });
      const post = await Service.findOnePost(id);
      this.setState({ post });
    } finally {
      this.setState({ ready: true });
    }
  };
}

///////////////////////////////////////////////////////////////////

// https://gist.github.com/boganegru/a4da0b0da0b1233d30b10063b10efa8a
// https://github.com/rexxars/react-markdown#node-types
const renderers: { [nodeType: string]: React.ElementType } = {
  paragraph: (props) => <Typography>{props.children}</Typography>,
  code: CodeBlock,
};
