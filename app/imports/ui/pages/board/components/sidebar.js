import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Courses } from '/imports/api/course/CourseCollection';
import { Profiles } from '/imports/api/profile/ProfileCollection';
import { _ } from 'meteor/underscore';
import { Card, Divider, Grid, Button} from 'semantic-ui-react';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    Meteor.subscribe(Courses.getPublicationName());
    Meteor.subscribe(Profiles.getPublicationName());
  }
  render() {
    const username = FlowRouter.getParam('username');
    const profile = Profiles.findDoc(username);
    //let myCourses = [];
    const myCourses = _.filter(_.map(Courses.findAll(),
        function makeCoursesObject(course) {
          if(course.username == username) {
            return { header: course.course, description: course.professor, semester: course.semester, id: course._id };
          }
        }), function(value) {return value != null});
    return (
      <div>
        <a className="item" href="#">{profile.firstName} {profile.lastName}</a>
        <a className="item" href="#"><h2>My Notebook</h2></a>
        <a className="item" href="board/add-course">
          <h3>Add Course<i className="plus icon"></i></h3>
        </a>
        {_.map(myCourses, function(course, key) {
          return <a className="item" href={'/' + username + '/myclass/' + course.id} key={key}><h3>{course.header}</h3></a>;
        })}
      </div>
    );
  }
}
/*

        <div className="ui four columns grid">
          <div className="row">
            <div className="ui horizontal divider">
              Fall 2018
            </div>
            <div className="column">
              <button className="ui course button">ICS 332</button>
            </div>
            <div className="column">
              <button className="ui course button">ICS 435</button>
            </div>
            <div className="column">
              <button className="ui course button">ICS 311</button>
            </div>
            <div className="column">
              <button className="ui course button">ICS 211</button>
            </div>
          </div>
          <div className="row">
            <div className="ui horizontal divider">
              Spring 2018
            </div>
            <div className="column">
              <button className="ui course button">JAP 211</button>
            </div>
            <div className="column">
              <button className="ui course button">Math 311</button>
            </div>
            <div className="column">
              <button className="ui course button">IP 367</button>
            </div>
            <div className="column">
              <button className="ui course button">ICS 321</button>
            </div>
          </div>
      </div>
 */