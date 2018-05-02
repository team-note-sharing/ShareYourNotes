import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Notes } from '/imports/api/note/NoteCollection';
import { Courses } from '/imports/api/course/CourseCollection';
import { Card, Divider, Header, Container, Dropdown} from 'semantic-ui-react';
import './board.css';
export default class Board extends Component {
  constructor(props) {
    super(props);
    Meteor.subscribe(Courses.getPublicationName());
    Meteor.subscribe(Notes.getPublicationName());
  }
  render() {

    const courseData = Courses.findDoc(FlowRouter.getParam('_id'));
    const NotesData = Notes.findAll();
    const username = FlowRouter.getParam('username');
    const courseTitle = courseData.course;
    const noteTitle = ["CPU", "System"]
    const options = [];
    for (i=0; i<noteTitle.length; i++) {
      options.push({key: noteTitle[i], value: noteTitle[i], text: noteTitle[i] })
    }
    const system = [
      { header: 'System 1',},
      { header: 'System 2', },
      { header: 'System 3', }
    ]
    const cpu = [
      {
        header: 'CPU 1',
        description: '',
        meta: '',
      },
      {
        header: 'CPU 2',
        description: '',
        meta: '',
      },
      {
        header: 'CPU 3',
        description: '',
        meta: '',
      },
  ]
    return (
      <div className="wraper">
       <Header as='h1' textAlign='center' block> {courseTitle} </Header>
       <a className="add" href={'/'+username+'/myclass/' + FlowRouter.getParam('_id') + '/add-note'}>
         <h3>Add New Note<i className="plus icon"></i></h3>
       </a>
       <Dropdown placeholder='Select topics' fluid multiple selection options={options} />
       <Container>
          <Divider horizontal><Header as='h2'>{noteTitle[0]}</Header></Divider>
          <Card.Group className='cardItem' itemsPerRow={5} items={cpu} />

          <Divider horizontal><Header as='h2'>{noteTitle[1]}</Header></Divider>
          <Card.Group className='cardItem' itemsPerRow={5} items={system} />
       </Container>

      </div>
    );
  }
}
