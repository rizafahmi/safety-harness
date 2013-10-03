Template.homePage.events({
  'click .comparison-btn':function(){
    Router.go('/comparison');
  },
  'click .features-btn':function(){
    Router.go('/features');
  },
  'click .runner-btn':function(){
    Router.go('/tests');
  }
})