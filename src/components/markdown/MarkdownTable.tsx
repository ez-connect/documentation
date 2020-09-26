import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import React from 'react';

export class MarkdownTable extends React.PureComponent {
  public render() {
    return (
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          {this.props.children}
        </Table>
      </TableContainer>
    );
  }
}

export class MarkdownTableHead extends React.PureComponent {
  public render() {
    return <TableHead>{this.props.children}</TableHead>;
  }
}

export class MarkdownTableCell extends React.PureComponent {
  public render() {
    return (
      <TableCell>
        <Typography>{this.props.children}</Typography>
      </TableCell>
    );
  }
}

export class MarkdownTableRow extends React.PureComponent {
  public render() {
    return <TableRow>{this.props.children}</TableRow>;
  }
}

export class MarkdownTableBody extends React.PureComponent {
  public render() {
    return <TableBody>{this.props.children}</TableBody>;
  }
}
