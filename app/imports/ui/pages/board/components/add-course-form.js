import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import TextInput from './text-input';
import FileInputs from './file-input';
import { Courses } from '/imports/api/course/CourseCollection';
import { Dropdown} from 'semantic-ui-react';

export default class CourseForm extends Component {
  constructor(props) {
    super(props);
    Meteor.subscribe(Courses.getPublicationName());
    //this.context = Courses.getSchema().namedContext('Add_Course_Page');
    this.state = {value: ''};
    this.state = {title: ''};
    this.state = {course: ''};
    this.state = {description: ''};

    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const username = FlowRouter.getParam('username');
    const course = event.target.course.value;
    const semester = event.target.semester.value;
    const professor = event.target.professor.value;
    const newCourseData = { username, course, semester, professor };

    const cleanData = Courses.getSchema().clean(newCourseData);
    // Determine validity.
    const context = Courses.getSchema().newContext()
    context.validate(cleanData);
    if (context.isValid()) {
      Courses.define(newCourseData);
      FlowRouter.go('/' + FlowRouter.getParam('username') + '/board');
      //console.log("Valid");
    } else {
      console.log("Error");
    }
  }
  handleFileUpload(event) {
    event.preventDefault();

  }
  render() {
    const semesters = ['Fall 2018', 'Spring 2018', 'Fall 2017', 'Spring 2017'];
    return <div className="ui container">
    <form onSubmit={this.handleSubmit} className="ui form">
      <div className="field">
        <TextInput type="text" name="course" label="Course" placeholder="ICS101"/>
      </div>
      <select name="semester" className="ui fluid selection search dropdown">
        {_.map(semesters, function(semester, key) {
          return <option value={semester} key={key}>{semester}</option>;
        })
        }
      </select>
      <div className="field">
        <TextInput type="text" name="professor" label="Professor"/>
      </div>
      <button className="ui primary button" type="submit">Submit</button>
      <a className="ui red button" href="../board">Cancel</a>
    </form>
    </div>;
  }
}
