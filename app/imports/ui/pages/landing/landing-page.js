import { Template } from 'meteor/templating';
import { $ } from 'meteor/jquery';

Template.Landing_Page.onRendered(function() {
  this.$('.ui.sidebar').sidebar({
    context: $('.ui.pushable.segment'),
    transition: 'overlay'
  }).sidebar('attach events', '#mobile_item');
});

