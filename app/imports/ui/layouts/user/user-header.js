import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { $ } from 'meteor/jquery';

Template.User_Header.onRendered(function() {
  this.$('.ui.sidebar').sidebar({
    context: $('.ui.pushable.segment'),
    transition: 'overlay'
  }).sidebar('attach events', '#mobile_item');
});

Template.User_Header.helpers({
  routeUserName() {
    return FlowRouter.getParam('username');
  },
});