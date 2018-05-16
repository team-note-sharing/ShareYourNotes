import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Profiles } from '/imports/api/profile/ProfileCollection';
import { Meteor } from 'meteor/meteor';
import { $ } from 'meteor/jquery';


Template.User_Header.onCreated(function onCreated() {
  this.subscribe(Profiles.getPublicationName());
});

Template.User_Header.onRendered( function () {
  $('.dropdown').dropdown({transition: 'drop' }).dropdown({ on: 'hover' });
  this.$('.ui.sidebar').sidebar({
    context: $('.ui.pushable.segment'),
    transition: 'overlay',
  }).sidebar('attach events', '#mobile_item');
});

Template.User_Header.helpers({
  routeUserName() {
    return FlowRouter.getParam('username');
  },
  profile() {
    return Profiles.findDoc(FlowRouter.getParam('username'));

  },
});

Template.User_Header.events({
  /**
   * Handle the click on the logout link.
   * @param event The click event.
   * @returns {boolean} False.
   */
  'click .cas-logout': function casLogout(event) {
    event.preventDefault();
    FlowRouter.go('/');
    //Meteor.logout();
    return false;
  },

  /**
   * Handle the click on the login link.
   * @param event The click event.
   * @returns {boolean} False.
   */
  'click .cas-login': function casLogin(event) {
    event.preventDefault();
    const callback = function loginCallback(error) {
      if (error) {
        console.log(error);
      }
    };
    FlowRouter.go('/janst');
    //Meteor.loginWithCas(callback);
    return false;
  },
});