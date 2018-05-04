import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Notes } from '/imports/api/note/NoteCollection';
import { _ } from 'meteor/underscore';
import { Card, Divider, Header, Container, Dropdown, Grid} from 'semantic-ui-react';
import './board.css';
export default class NoteBoard extends Component {
  constructor(props) {
    super(props);
    Meteor.subscribe(Notes.getPublicationName());
  }
  render() {
    const username = FlowRouter.getParam('username');
    const noteData = Notes.findDoc(FlowRouter.getParam('_note_id'));
    return (
        <div className="ui container wraper">
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
        </div>
    );
  }
}
