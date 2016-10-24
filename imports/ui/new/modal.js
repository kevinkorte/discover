import { Template } from 'meteor/templating';
import { EJSON } from 'meteor/ejson';


import './modal.html';

Template.modal.helpers({
  video() {
      var video = Session.get('vidRes');
      if (video !== undefined) {
          return video.items[0].snippet;
      }
  }
});

Template.modal.events({
  'paste .form-control': function() {
      var videoId = new Promise(function(resolve,reject) {
          setTimeout(function() {
              var url = $('.form-control').val();
              Meteor.call('youtubeParser', url, function(error, result) {
                resolve(result);
              });
              // function youtube_parser(url){
              //     var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
              //     var match = url.match(regExp);
              //     return (match&&match[7].length==11)? match[7] : false;
              // }
              // id = youtube_parser(url);
              // resolve(id);
          },100);
      });
      videoId.then(function(id) {
          if (id) {
            console.log(id);
            var request = gapi.client.youtube.videos.list({
                id: id,
                part: 'snippet'
            });
            request.execute(function(response) {
                var str = EJSON.stringify(response.result);
                var parse = EJSON.parse(str);
                Session.set('vidRes', parse);
            });
          }
      });

  }
});
