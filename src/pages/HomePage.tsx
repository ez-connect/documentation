import { Box, Grid } from '@material-ui/core';
import { Issue, Routing, Service } from 'git-cms-service';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  CodeBlock,
  LinearIndicator,
  MarkdownHeading,
  MarkdownParagraph,
  MarkdownTable,
  MarkdownTableBody,
  MarkdownTableCell,
  MarkdownTableHead,
  MarkdownTableRow,
  NavBar,
  Toc,
} from '../components';
import { Parse, TocItem } from '../utils';

interface State {
  ready?: boolean;
  toc?: TocItem[];
  post?: Issue;
}

export class HomePage extends React.PureComponent<any, State> {
  public state: State = {};

  public componentDidMount() {
    this._load();
  }

  public render() {
    const { ready, toc, post } = this.state;
    return (
      <>
        <LinearIndicator enabled={!ready} />
        <NavBar />

        <Grid container direction="row">
          <Grid item md={3}>
            <Toc items={toc} selected={post?.id} onChanged={this._onChanged} />
          </Grid>
          <Grid item md={7}>
            <Box m={1}>
              <ReactMarkdown source={post?.body} renderers={renderers} />
            </Box>
          </Grid>
        </Grid>
      </>
    );
  }

  private async _load() {
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
    } catch (err) {
      // this._signIn();
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

  // private _signIn() {
  //   if (!window.location.search.startsWith('?code=')) {
  //     alert('Sign-in');
  //     const url = Service.getSignInURL();
  //     Logger.warn(url);
  //     window.location.href = url;
  //   } else {
  //     Logger.warn(window.location.search);
  //     history.push({
  //       pathname: config.router.auth,
  //       search: window.location.search,
  //     });
  //   }
  // }
}

///////////////////////////////////////////////////////////////////

// https://gist.github.com/boganegru/a4da0b0da0b1233d30b10063b10efa8a
// https://github.com/rexxars/react-markdown#node-types
const renderers: { [nodeType: string]: React.ElementType } = {
  heading: MarkdownHeading,
  paragraph: MarkdownParagraph,
  code: CodeBlock,
  table: MarkdownTable,
  tableHead: MarkdownTableHead,
  tableBody: MarkdownTableBody,
  tableRow: MarkdownTableRow,
  tableCell: MarkdownTableCell,
};
