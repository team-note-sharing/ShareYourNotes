import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import Dashboard  from './components/dashboard';

Template.My_Board_Page.helpers({
  dashboard: function () {
    return Dashboard;
  },
});
/* Test Tic-Tac-Toe
Template.Add_Note_Page.helpers ({
  app: function () {
    return App;
  },
});
*/
