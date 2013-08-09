Session.setDefault('testharness_title', "Meteor Test Harnesss")

Template.navbarHeaderTemplate.getTitle = function(){
  return Session.get('testharness_title');
};