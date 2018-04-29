import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Profiles } from '/imports/api/profile/ProfileCollection';
import { Notes } from '/imports/api/note/NoteCollection';
import { Meteor } from 'meteor/meteor';
import Dashboard from './components/dashboard';


Template.My_Board_Page.onCreated(function onCreated() {
  this.subscribe(Profiles.getPublicationName());
  this.subscribe(Notes.getPublicationName());
});

Template.My_Board_Page.helpers({
  dashboard: function () {
    return Dashboard;
  },
  profile() {
    return Profiles.findDoc(FlowRouter.getParam('username'));

  },
});
/* Test Tic-Tac-Toe
Template.Add_Note_Page.helpers ({
  app: function () {
    return App;
  },
});
*/
