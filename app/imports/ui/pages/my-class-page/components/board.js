import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Notes } from '/imports/api/note/NoteCollection';
import { Courses } from '/imports/api/course/CourseCollection';
import { _ } from 'meteor/underscore';
import { Image as ImageComponent, Item, Container, Header } from 'semantic-ui-react'
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
            return { title: note.title, course: note.course, description: note.description, id: note._id, attachments: note.attachments };
          }
        }), function(value) {return value != null});
    return (
        <Container>
          <Header as='h1' textAlign='center' block> {courseTitle} </Header>
          <a className="add" href={'/'+username+'/myclass/' + FlowRouter.getParam('_id') + '/add-note'}>
            <h3>Add New Note<i className="plus icon"></i></h3>
          </a>
        <Item.Group>
          {_.map(myNotes, function(note, key) {
            return (
                <Item key={key} href={'/'+username+'/myclass/' + FlowRouter.getParam('_id') + '/mynote/' + note.id}>
                  <Item.Image size='tiny' src={note.attachments[0]} />
                  <Item.Content>
                    <Item.Header>{note.title}</Item.Header>
                    <Item.Description>{note.description}</Item.Description>
                  </Item.Content>
                </Item>
            )
          })}

        </Item.Group>
        </Container>
    );
  }
}
