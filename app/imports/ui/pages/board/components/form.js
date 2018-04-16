import React, { Component } from 'react';
import { render } from 'react-dom';
import TextInput from './text-input';
import FileInputs from './file-input';
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state = {title: ''};
    this.state = {course: ''};
    this.state = {description: ''};

    this.handleFileUpload = this.handleFileUpload.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.state.title = event.target.title.value;
    this.state.course = event.target.course.value;
    this.state.description = event.target.description.value;
    console.log(this.state);
  }
  handleFileUpload(event) {
    event.preventDefault();

  }
  render() {
    return <div className="ui container">
    <form onSubmit={this.handleSubmit} className="ui form">
      <div className="field">
        <TextInput type="text" name="title" label="Title" placeholder="Programming"/>
      </div>
      <div className="field">
        <TextInput type="text" name="course" label="Course" placeholder="ICS 465"/>
      </div>
      <div className="field">
        <TextInput type="textarea" name="description" label="Description"/>
      </div>
      <div className="field">
        <FileInputs name="file" label="Attachment"/>
      </div>
      <button className="ui button" type="submit">Submit</button>
    </form>
    </div>;
  }
}
