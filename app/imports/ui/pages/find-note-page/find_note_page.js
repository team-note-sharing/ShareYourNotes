import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Profiles } from '/imports/api/profile/ProfileCollection';
import { Meteor } from 'meteor/meteor';
import Dashboard from './components/dashboard';


Template.Find_Note_Page.onCreated(function onCreated() {
  this.subscribe(Profiles.getPublicationName());
});

Template.Find_Note_Page.helpers({
  dashboard: function () {
    return Dashboard;
  },
  profile() {
    return Profiles.findDoc(FlowRouter.getParam('username'));

  },
});
