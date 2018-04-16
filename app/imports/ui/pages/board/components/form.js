import React, { Component } from 'react';
import { render } from 'react-dom';
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
        <label>Notes Title</label>
        <input type="text" name="title" placeholder="Programming Testing"/>
      </div>
      <div className="field">
        <label>Course</label>
        <input type="text" name="course" placeholder="ICS465"/>
      </div>
      <div className="field">
        <label>Description</label>
        <textarea name="description"/>
      </div>
      <div className="field">
        <label>Attachment</label>
        <input type="file" name="file" onChange={this.handleFileUpload}/>
      </div>
      <button className="ui button" type="submit">Submit</button>
    </form>
    </div>;
  }
}
