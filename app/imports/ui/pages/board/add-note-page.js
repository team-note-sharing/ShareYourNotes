import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import Form  from './components/form';

Template.Add_Note_Page.helpers({
  form: function () {
    return Form;
  },
});
/* Test Tic-Tac-Toe
Template.Add_Note_Page.helpers ({
  app: function () {
    return App;
  },
});
*/
