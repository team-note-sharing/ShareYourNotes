import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import TextInput from './text-input';
import FileInputs from './file-input';
import { Notes } from '/imports/api/note/NoteCollection';
export default class NoteForm extends Component {
  constructor(props) {
    super(props);
    Meteor.subscribe(Notes.getPublicationName());
    //this.context = Notes.getSchema().namedContext('Add_Note_Page');
    this.state = {value: ''};
    this.state = {title: ''};
    this.state = {course: ''};
    this.state = {description: ''};

    this.handleFileUpload = this.handleFileUpload.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const course = event.target.course.value;
    const description = event.target.description.value;
    const attachment = '';

    const newNoteData = { title, course, description, attachment };

    const cleanData = Notes.getSchema().clean(newNoteData);
    // Determine validity.
    const context = Notes.getSchema().newContext()
    context.validate(cleanData);
    if (context.isValid()) {
      Notes.define(newNoteData);
      FlowRouter.go('/' + FlowRouter.getParam('username') + '/board');
      //console.log("Valid");
    } else {
      console.log("Error");
    }
    //Notes.define(newNoteData);
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
        <FileInputs name="attachment" label="Attachment"/>
      </div>
      <button className="ui primary button" type="submit">Submit</button>
      <a className="ui red button" href="../board">Cancel</a>
    </form>
    </div>;
  }
}
