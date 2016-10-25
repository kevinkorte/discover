import { FlowRouter } from 'meteor/kadira:flow-router';

FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("mainLayout", {area: "navigation"});
    }
});

FlowRouter.route('/signup', {
    action: function(params) {
        BlazeLayout.render("signup");
    }
});
