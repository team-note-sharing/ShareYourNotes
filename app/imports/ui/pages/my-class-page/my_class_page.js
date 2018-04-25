import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import Board from './components/board';

Template.My_Class_Page.helpers({
  board: function () {
    return Board;
  },
});
