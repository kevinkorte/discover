import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './routes.js';
import '../../../node_modules/animate.css/animate.min.css';
import '../../ui/layouts/mainLayout.html';
import '../../ui/navigation/navigation.js';
import '../../ui/new/modal.js';

Template.body.onCreated(function() {
  console.log('head is here');
  function makeRequest() {
      console.log('makeRequest');
  }


  function init() {
      gapi.client.setApiKey(googleApiKey);
      gapi.client.load('youtube', 'v3').then(makeRequest);
      console.log('init');
  }
  gapi.load('client', init);
});

Meteor.startup(function () {
  var google = Meteor.settings.public.googleApiKey;
  console.log(google);

});
