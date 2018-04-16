import React, { Component } from 'react';
import { render } from 'react-dom';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);

  }
  handleSubmit(event) {
    event.preventDefault();
  }
  handleFileUpload(event) {
    event.preventDefault();

  }
  render() {
    return <div className="ui container">
      <h3>Dash Board</h3>

    </div>;
  }
}
