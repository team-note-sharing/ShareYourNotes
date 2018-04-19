import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Profiles } from '/imports/api/profile/ProfileCollection';
import { Meteor } from 'meteor/meteor';
import Dashboard from './components/dashboard';


Template.My_Class_Page.onCreated(function onCreated() {
  this.subscribe(Profiles.getPublicationName());
});

Template.My_Class_Page.helpers({
  dashboard: function () {
    return Dashboard;
  },
  profile() {
    return Profiles.findDoc(FlowRouter.getParam('username'));

  },
});
