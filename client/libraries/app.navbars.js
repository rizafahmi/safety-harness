Session.setDefault('safety_harness_title', "Meteor Safety Harnesss")
Session.setDefault('demo_mode', true);

Template.navbarHeaderTemplate.getTitle = function(){
  return Session.get('safety_harness_title');
};

Template.navbarHeaderTemplate.getLink = function(){
    if(Session.get('demo_mode')){
        return '/';
    }else{
        return '/tests';
    }
};


Session.setDefault('integration_interval', false);
Template.navbarFooterTemplate.events({
    'click .sample':function(){
        alert($('#iFrameBrowser').contents().find('title').html());
    },

  'click .1-minute':function(){
    Session.set('integration_interval', 1);
    setIntegrationInterval (60);
  },
  'click .5-minute':function(){
    Session.set('integration_interval', 5);
    setIntegrationInterval(300);
  },
  'click .15-minute':function(){
    Session.set('integration_interval', 15);
    setIntegrationInterval(900);
  },
  'click .30-minute':function(){
    Session.set('integration_interval', 30);
    setIntegrationInterval(1800);
  },
  'click .60-minute':function(){
    Session.set('integration_interval', 60);
    setIntegrationInterval(3600);
  },
  'click .240-minute':function(){
    Session.set('integration_interval', 240);
    setIntegrationInterval(14400);
  },
  'click .1440-minute':function(){
    Session.set('integration_interval', 1440);
    setIntegrationInterval(864000);
  }
});
setIntegrationInterval = function(interval) {
  Session.set ('remaining_time_in_seconds', interval);
  setInterval (function () {
    if(Session.get('is_timer_active')){
      if(Session.get('remaining_time_in_seconds') > 0){
        Session.set('remaining_time_in_seconds', Session.get('remaining_time_in_seconds') - 1);
      }else{
        Session.set('remaining_time_in_seconds', interval);
        console.log('time to integrate!');
        alert('Time to run integration tests!  Unfortunately, this feature is only half-implemented, so only pops up this message.');
        Meteor.flush();
      }
    }
  }, 1000);
}



Template.navbarFooterTemplate.getMinuteStyle1 = function(){
  if(Session.get('integration_interval') === 1) {
    return "btn-info";
  }else{
    return "btn-default";
  }
}
Template.navbarFooterTemplate.getMinuteStyle5 = function(){
  if(Session.get('integration_interval') === 5) {
    return "btn-info";
  }else{
    return "btn-default";
  }
}
Template.navbarFooterTemplate.getMinuteStyle15 = function(){
  if(Session.get('integration_interval') === 15) {
    return "btn-info";
  }else{
    return "btn-default";
  }
}
Template.navbarFooterTemplate.getMinuteStyle30 = function(){
  if(Session.get('integration_interval') === 30) {
    return "btn-info";
  }else{
    return "btn-default";
  }
}
Template.navbarFooterTemplate.getMinuteStyle60 = function(){
  if(Session.get('integration_interval') === 60) {
    return "btn-info";
  }else{
    return "btn-default";
  }
}
Template.navbarFooterTemplate.getMinuteStyle240 = function(){
  if(Session.get('integration_interval') === 240) {
    return "btn-info";
  }else{
    return "btn-default";
  }
}
Template.navbarFooterTemplate.getMinuteStyle1440 = function(){
  if(Session.get('integration_interval') === 1440) {
    return "btn-info";
  }else{
    return "btn-default";
  }
}

Template.navbarFooterTemplate.getIntegrationInterval = function(){
  return Session.get('integration_interval');
}
Template.navbarFooterTemplate.getRemainingTime = function(){
  return Session.get('remaining_time_in_seconds');
}

Session.setDefault('is_timer_active', false);
Template.navbarFooterTemplate.getTimerButtonText = function(){
  if(Session.get('is_timer_active')){
      return "Stop Integration";
  }else{
    return "Start Automated Integration";
  }
};
Template.navbarFooterTemplate.isIntegrationActivated = function(){
    if(Session.get('is_timer_active')){
        return true;
    }else{
        return false;
    }
};
Template.navbarFooterTemplate.events({
    'click .timer-button': function(){
      if(Session.get('is_timer_active')){
        Session.set('integration_interval', 'off');
        Session.set('is_timer_active', false);
      }else{
        Session.set('is_timer_active', true);
      }
    }
})

//toggleSession = function(session_variable){
//    if(Session.get(session_variable)){
//        Session.set(session_variable, false);
//    }else{
//        Session.set(session_variable, true);
//    }
//}
