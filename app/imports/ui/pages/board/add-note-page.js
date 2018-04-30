import { render } from 'react-dom';
import { Template } from 'meteor/templating';
import NoteForm  from './components/add-note-form';
Template.Add_Note_Page.helpers({
  form: function () {
    return NoteForm;
  },
});