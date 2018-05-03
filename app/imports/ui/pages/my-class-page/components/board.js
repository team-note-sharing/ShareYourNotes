import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Notes } from '/imports/api/note/NoteCollection';
import { Courses } from '/imports/api/course/CourseCollection';
import { _ } from 'meteor/underscore';
import { Card, Divider, Header, Container, Dropdown, Grid} from 'semantic-ui-react';
import './board.css';
export default class Board extends Component {
  constructor(props) {
    super(props);
    Meteor.subscribe(Courses.getPublicationName());
    Meteor.subscribe(Notes.getPublicationName());
  }
  render() {
    const username = FlowRouter.getParam('username');
    const courseData = Courses.findDoc(FlowRouter.getParam('_id'));
    const NotesData = Notes.findAll();
    const courseTitle = courseData.course;
    const myNotes = _.filter(_.map(Notes.findAll(),
        function makeCoursesObject(note) {
          if(note.username == username && note.course == courseTitle) {
            return { title: note.title, course: note.course, description: note.description, id: note._id };
          }
        }), function(value) {return value != null});
    let noteTitle = _.uniq(_.map(myNotes, function(note) {
      return note.title;
    }));
    return (
      <div className="wraper">
       <Header as='h1' textAlign='center' block> {courseTitle} </Header>
       <a className="add" href={'/'+username+'/myclass/' + FlowRouter.getParam('_id') + '/add-note'}>
         <h3>Add New Note<i className="plus icon"></i></h3>
       </a>
    {/*<Dropdown placeholder='Select topics' fluid multiple selection options={options} />*/}
       <Container>
        <Grid columns={4}>
         {_.map(noteTitle, function(nTitle, title_key) {
            return (
           <Grid.Row key={title_key}>
              <Divider horizontal>
                {nTitle}
              </Divider>
              <Card.Group className='cardItem' itemsPerRow={4} >
                {_.map(_.where(myNotes, {'title': nTitle }), function(note, note_key) {
                 return (
                     <Card key={note_key}>
                      <Card.Content>
                        {/*}<Card.Header as="a" href='#'>{course.header}</Card.Header>*/}
                        <Card.Description>
                          {note.description}
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
          {/*
          <Divider horizontal><Header as='h2'>{noteTitle[0]}</Header></Divider>
          <Card.Group className='cardItem' itemsPerRow={5} items={cpu} />

          <Divider horizontal><Header as='h2'>{noteTitle[1]}</Header></Divider>
          <Card.Group className='cardItem' itemsPerRow={5} items={system} />
          */}
       </Container>

      </div>
    );
  }
}
