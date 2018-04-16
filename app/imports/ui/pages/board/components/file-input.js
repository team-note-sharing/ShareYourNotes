import React, { Component } from 'react';
import { render } from 'react-dom';
import './component.css';
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
    this.handleAddFile = this.handleAddFile.bind(this);
    this.handleRemoveFile = this.handleRemoveFile.bind(this);
  }
  handleAddFile(event) {
    event.preventDefault();
      const files = this.state.files;
      files.push({ id: this.nextId, name: 'file ' + this.nextId, label: '' });
      this.nextId++;
      this.setState({ files: files });
  }
  handleRemoveFile(event) {
    event.preventDefault();
    const files = this.state.files;
    pos = files.map(function(e) { return e.id; }).indexOf(parseInt(event.target.name));
    files.splice(pos, 1);
    this.setState({ files: files });
  }
  render () { return <div>
    <label>{this.state.label}</label> <br/>
    <input type="button" className="ui mini button" onClick={this.handleAddFile} value="+"/>
    {this.state.files.map((file, index) => {
      return <span key={"span " + file.id}>
        <FileInput key={file.id} label={file.label} name={file.name} />
        <input type="button" className="ui mini button"  key={" " + file.id} name={file.id} onClick={this.handleRemoveFile} value="x"/>
      </span>;
    })}
  </div>;
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