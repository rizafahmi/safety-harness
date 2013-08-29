Session.setDefault('testharness_title', "Meteor Safety Harnesss")

Template.navbarHeaderTemplate.getTitle = function(){
  return Session.get('testharness_title');
};





Template.navbarFooterTemplate.events({
    'click .sample':function(){
        alert($('#iFrameBrowser').contents().find('title').html());
    }
})