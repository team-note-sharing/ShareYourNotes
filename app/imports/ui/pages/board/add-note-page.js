import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import NoteForm  from './components/add-note-form';
import { Courses } from '/imports/api/course/CourseCollection';
Template.Add_Note_Page.onCreated(function onCreated() {
  this.subscribe(Courses.getPublicationName());

});
Template.Add_Note_Page.helpers({
  form: function () {
    return NoteForm;
  },
});