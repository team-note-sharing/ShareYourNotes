import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import { Notes } from '/imports/api/note/NoteCollection';
import { Courses } from '/imports/api/course/CourseCollection';
import NoteBoard from './components/note_board';

Template.My_Note_Page.onCreated(function onCreated() {
  this.subscribe(Notes.getPublicationName());
  this.subscribe(Courses.getPublicationName());

});
Template.My_Note_Page.helpers({
  noteboard: function () {
    return NoteBoard;
  },
});
