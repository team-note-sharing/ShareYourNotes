import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import TextInput from './text-input';
import FileInputs from './file-input';
import { Notes } from '/imports/api/note/NoteCollection';
import { Courses } from '/imports/api/course/CourseCollection';
export default class NoteForm extends Component {
  constructor(props) {
    super(props);
    Meteor.subscribe(Notes.getPublicationName());
    Meteor.subscribe(Courses.getPublicationName());
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   handleSubmit(event) {

    event.preventDefault();
     const username = FlowRouter.getParam('username');
     const courseID = FlowRouter.getParam('_id');
     const title = event.target.title.value;
     const course = event.target.course.value;
     const description = event.target.description.value;
     const attachments = [];
     const newNoteData = { username, title, course, description, attachments };
     this.child.handleClick(newNoteData);
  }
  render() {
    const username = FlowRouter.getParam('username');
    const courseID = FlowRouter.getParam('_id');
    const courseData = Courses.findDoc(FlowRouter.getParam('_id'));
    return <div className="ui container">
    <form onSubmit={this.handleSubmit} className="ui form">
      <div className="field">
        <TextInput type="text" name="title" value="" label="Title" placeholder="Programming"/>
      </div>
      <div className="field">
        <TextInput type="text" value={courseData.course} name="course" label="Course" placeholder="ICS 465"/>
      </div>
      <div className="field">
        <TextInput type="textarea" name="description" label="Description"/>
      </div>
      <div className="field">
        <FileInputs ref={instance => { this.child = instance; }} name="attachment" label="Attachment"/>
      </div>
      <button className="ui primary button" type="submit">Submit</button>
      <a className="ui red button" href={'/' + username + /myclass/ + courseID}>Cancel</a>
    </form>
    </div>;
  }
}
