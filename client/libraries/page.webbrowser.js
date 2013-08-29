Session.setDefault('browser_window_location', 'http://todos.meteor.com');
Session.setDefault('is_submitting_url', false);



Template.webBrowserTemplate.browser_window_location = function(){
    return Session.get('browser_window_location');
};
Template.mochaTestPage.browser_window_location = function(){
    return Session.get('browser_window_location');
};
Template.mochaTestPage.events({
    'keyup #urlAddressBar': function(evt,tmpl){
        try{
            if(evt.keyCode == 13) {
                Session.set('browser_window_location', $('#urlAddressBar').val());
                Meteor.flush();
            }
        }catch(err){
            console.error(err);
        }
    }
});