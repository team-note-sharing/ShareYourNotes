import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import TheBody from './components/theBody';

Template.Public_Class_Page.helpers({
  theBody: function () {
    return TheBody;
  },
});
