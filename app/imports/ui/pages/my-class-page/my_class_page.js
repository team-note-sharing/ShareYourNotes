import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import { Courses } from '/imports/api/course/CourseCollection';
import { Notes } from '/imports/api/note/NoteCollection';
import Board from './components/board';

Template.My_Class_Page.onCreated(function onCreated() {
  this.subscribe(Courses.getPublicationName());
  this.subscribe(Notes.getPublicationName());

});
Template.My_Class_Page.helpers({
  board: function () {
    return Board;
  },
});
