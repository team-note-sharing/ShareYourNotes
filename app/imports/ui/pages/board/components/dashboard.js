import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
//import { Notes } from '/imports/api/note/NoteCollection';
import { Courses } from '/imports/api/course/CourseCollection';
import { _ } from 'meteor/underscore';
import { Card, Divider, Grid, Button} from 'semantic-ui-react';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    Meteor.subscribe(Courses.getPublicationName());
  }
  render() {
    const username = FlowRouter.getParam('username');
    const myCourses = _.filter(_.map(Courses.findAll(),
        function makeCoursesObject(course) {
          if(course.username == username) {
            return { header: course.course, description: course.professor, semester: course.semester };
          }
        }), function(value) {return value != null});
    let semesters = _.uniq(_.map(myCourses, function(course) {
      return course.semester;
    }));
    return (
        <Grid columns={4}>
        {_.map(semesters, function(semester, key) {
           return (
          <Grid.Row key={key}>
             <Divider horizontal>
               {semester}
             </Divider>
             <Card.Group className='cardItem' itemsPerRow={4} items={_.where(myCourses, {'semester': semester })} />
           </Grid.Row>
           );
        })}
        </Grid>
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