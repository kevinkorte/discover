import { Template } from 'meteor/templating';

import './navigation.html';

Template.navigation.events({
  'click .js-modal'(event) {
    $('.ui.modal').modal('show');
  }
})
