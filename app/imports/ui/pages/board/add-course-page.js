import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import CourseForm  from './components/add-course-form';
Template.Add_Course_Page.helpers({
  form: function () {
    return CourseForm;
  },
});

Template.Add_Course_Page.onRendered(function onRendered() {
  this.$('.ui.search.dropdown').dropdown();
});