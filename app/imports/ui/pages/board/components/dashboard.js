import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
//import { Notes } from '/imports/api/note/NoteCollection';
import { Courses } from '/imports/api/course/CourseCollection';
import {Notes} from '/imports/api/note/NoteCollection';
import { _ } from 'meteor/underscore';
import { Card, Divider, Grid, Button} from 'semantic-ui-react';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    Meteor.subscribe(Courses.getPublicationName());
  }
  render() {
    console.log(Notes);
    const username = FlowRouter.getParam('username');
    const myCourses = _.filter(_.map(Courses.findAll(),
        function makeCoursesObject(course) {
          if(course.username == username) {
            return { header: course.course, description: course.professor, semester: course.semester, id: course._id };
          }
        }), function(value) {return value != null});

    const myNotes = _.filter(_.map(Notes.findAll(),
        function makeCoursesObject(note) {
            return { header: note.title, description: note.course, semester: note.description, id: note._id };
        }), function(value) {return value != null});
        console.log(myCourses);
        console.log(myNotes);    
    let semesters = _.uniq(_.map(myCourses, function(course) {
      return course.semester;
    }));
    return (
        <Grid columns={4}>
        {_.map(semesters, function(semester, semester_key) {
           return (
          <Grid.Row key={semester_key}>
             <Divider horizontal>
               {semester}
             </Divider>
             <Card.Group className='cardItem' itemsPerRow={4} >
               {_.map(_.where(myCourses, {'semester': semester }), function(course, course_key) {
                return (
                    <Card key={course_key}>
                     <Card.Content>
                       <Card.Header as="a" href={'/' + username + '/myclass/' + course.id}>{course.header}</Card.Header>
                       <Card.Description>
                         {course.description}
                       </Card.Description>
                     </Card.Content>
                   </Card>
                );
               })}

             </Card.Group>
           </Grid.Row>
           );
        })}
        </Grid>
    );
  }
}
