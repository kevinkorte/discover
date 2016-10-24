UI.registerHelper('publishedAgo', function(publishedAt) {
  return moment(publishedAt).fromNow();
});
