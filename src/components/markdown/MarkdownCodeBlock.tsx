// https://www.fergusfrl.xyz/blog/syntax-highlighting-in-react-markdown

import Mermaid from 'mermaid';
import React from 'react';
import { Prism } from 'react-syntax-highlighter';

interface Props {
  language: string;
  value: string;
}

export class MarkdownCodeBlock extends React.PureComponent<Props> {
  public render() {
    const { language, value } = this.props;
    if (language !== 'mermaid') {
      return <Prism language={language}>{value}</Prism>;
    }

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: Mermaid.render('graph', value, this._onMermaidBind),
        }}
      />
    );
  }

  private _onMermaidBind() {
    //
  }
}
