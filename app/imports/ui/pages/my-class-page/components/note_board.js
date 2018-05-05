import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Notes } from '/imports/api/note/NoteCollection';
import { Courses } from '/imports/api/course/CourseCollection';
import { _ } from 'meteor/underscore';
import { Card, Divider, Header, Container, Dropdown, Grid} from 'semantic-ui-react';
import './board.css';
export default class NoteBoard extends Component {
  constructor(props) {
    super(props);
    Meteor.subscribe(Notes.getPublicationName());
    Meteor.subscribe(Courses.getPublicationName());
  }
  render() {
    const username = FlowRouter.getParam('username');
    const noteData = Notes.findDoc(FlowRouter.getParam('_note_id'));
    const courseData = Courses.findDoc(FlowRouter.getParam('_id'));
    return (
        <div className="ui container wrapper">
          <Header as='h1' textAlign='center' block>
            <a className="header" href={'/'+username+'/myclass/' + FlowRouter.getParam('_id')}>
              {courseData.course}
              </a>
          </Header>
          <div className="ui items">
            <div className="item">
              <div className="content">
                <a className="header">{noteData.title}</a>
                <div className="description">
                  <p>{noteData.description}</p>
                </div>
                {_.map(noteData.attachments, function (image, key) {
                  return <img className="ui centered large image" key={key} src={image}/>;
                })}
                <div className="extra">
                  <i className="green check icon"></i>
                  121 Votes
                </div>
              </div>
            </div>
          </div>
          <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>
            <div className="comment">
              <a className="avatar">
                <img src="/images/baek.jpg"/>
              </a>
              <div className="content">
                <a className="author">Baek</a>
                <div className="metadata">
                  <span className="date">Today at 5:42PM</span>
                </div>
                <div className="text">
                  How artistic!
                </div>
                <div className="actions">
                  <a className="reply">Reply</a>
                </div>
              </div>
            </div>
            <div className="comment">
              <a className="avatar">
                <img src="/images/binsted.jpg"/>
              </a>
              <div className="content">
                <a className="author">Kim</a>
                <div className="metadata">
                  <span className="date">Yesterday at 12:30AM</span>
                </div>
                <div className="text">
                  <p>This has been very useful for my research. Thanks as well!</p>
                </div>
                <div className="actions">
                  <a className="reply">Reply</a>
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                  <a className="avatar">
                    <img src="/images/johnson.jpg"/>
                  </a>
                  <div className="content">
                    <a className="author">Philip</a>
                    <div className="metadata">
                      <span className="date">Just now</span>
                    </div>
                    <div className="text">
                      Elliot you are always so right :)
                    </div>
                    <div className="actions">
                      <a className="reply">Reply</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form className="ui reply form">
              <div className="field">
                <textarea></textarea>
              </div>
              <div className="ui blue labeled submit icon button">
                <i className="icon edit"></i> Add Reply
              </div>
            </form>
          </div>
        </div>
    );
  }
}
