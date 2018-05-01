import { Template } from 'meteor/templating';
import { Profiles } from '/imports/api/profile/ProfileCollection';
import { Courses } from '/imports/api/course/CourseCollection';
import Dashboard from './components/dashboard';
import SideBar from './components/sidebar';


Template.My_Board_Page.onCreated(function onCreated() {
  this.subscribe(Courses.getPublicationName());

});
Template.My_Board_Page.helpers({
  dashboard: function () {
    return Dashboard;
  },
  sidebar: function () {
    return SideBar;
  },
});
/* Test Tic-Tac-Toe
Template.Add_Note_Page.helpers ({
  app: function () {
    return App;
  },
});
*/
