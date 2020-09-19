import { Grid, Typography } from '@material-ui/core';
import { Issue, Item, Routing, Service } from 'git-cms-service';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { CodeBlock, NavBar, Toc } from '../components';

export class PostPage extends React.PureComponent<any, Item<Issue>> {
  public state: Item<Issue> = {};

  public componentDidMount() {
    this._load();
  }

  public shouldComponentUpdate(
    nextProps: any,
    nextState: Item<Issue>,
  ): boolean {
    if (this.props !== nextProps) {
      this._load();
    }

    return this.state !== nextState;
  }

  public render() {
    const { item } = this.state;
    const { title, body } = item ?? {};
    return (
      <>
        <NavBar />
        <Grid container direction="row">
          <Grid item md={3}>
            <Toc />
          </Grid>
          <Grid item md={9}>
            <Typography variant="h5">{title}</Typography>

            <ReactMarkdown source={body} renderers={{ code: CodeBlock }} />
          </Grid>
        </Grid>
      </>
    );
  }

  private async _load() {
    const id = Routing.getPostIdFromPath(this.props.match.params.id);
    const item = await Service.findOnePost(id);
    this.setState({ item });
  }
}
