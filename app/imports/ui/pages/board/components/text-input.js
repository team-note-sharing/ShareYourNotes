import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      type: this.props.type,
      label: this.props.label,
      name: this.props.name,
      placeholder: this.props.placeholder
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleTextChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
  }
  render () {
    if(this.state.type === 'text') {
      return <label>{this.state.label}
        <input type="text" name={this.state.name} value={this.state.value} placeholder={this.state.placeholder}
               onChange={this.handleTextChange}/>
      </label>;
    }
    else if(this.state.type === 'textarea') {
      return <label>{this.state.label}
        <textarea name={this.state.name} value={this.state.value} placeholder={this.state.placeholder}
               onChange={this.handleTextChange}/>
      </label>;
    }
    else {
      throw new Meteor.Error(`${this.state.type} is not a defined text-input type`);
    }
  }
}
