import React, { Component } from 'react';
import { render } from 'react-dom';

export default class FileInputs extends Component {
  constructor(props) {
    super(props);
    this.nextId = 2;
    this.state = {
      label: this.props.label,
      files: [
        {id: 1, label: '', name: 'File 1'},
      ],
    }
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }
  handleFileUpload(event) {
    event.preventDefault();
    const files = this.state.files;
    files.push({id: this.nextId, name: 'file ' + this.nextId, label: ''});
    this.nextId++;
    this.setState({files: files});
  }
  render () { return <label>{this.state.label} <br/>
    {this.state.files.map((file, index) => {
      return (<FileInput key={file.id} label={file.label} name={file.name} onChange={this.handleFileUpload}/>);
    })}
  </label>;
  }
}

export class FileInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label,
      name: this.props.name
    }
  }
    render()
    {
      return <label>{this.state.label} <br/>
        <input type="file" name={this.state.name} onChange={this.props.onChange}/>
      </label>;
    }
}