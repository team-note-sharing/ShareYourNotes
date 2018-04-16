import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Square extends Component{
  render() {
    let red = this.props.winner ? ' red' : '';
    return (
        <button className={"square" + red } onClick={() => this.props.onClick()}>
          {this.props.value}
        </button>
    );
  }
}
