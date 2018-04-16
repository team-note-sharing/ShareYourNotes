import React, { Component } from 'react';
import { render } from 'react-dom';
import Square from './Square.js';
export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  renderSquare(i, win) {
    return (
        <Square
            key = {i}
            winner = {win}
            value = {this.props.squares[i]}
            onClick = {() => this.props.onClick(i)}
        />
    );
  }
  render() {
    let win = false;
    let board_row = [];
    for(let col = 0; col < 3; col++) {
      let board_col = [];
      for(let row = 0; row < 3; row++) {
        if(this.props.squares.winSquares) {
          win = this.props.squares.winSquares.indexOf(col*3 + row) !== -1 ? true : false;
        }
        board_col.push(this.renderSquare(col*3 + row, win));
      }
      board_row.push(<div className="board-row" key={col}>{board_col}</div>);
    }
    return (<div>{board_row}</div>);
  }
}
