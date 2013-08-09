Session.set('user_search_term', '');
Session.set('selected_user', '');
Session.set('global_edit', false);

Session.set('editing_first_name', false);
Session.set('editing_last_name', false);
Session.set('editing_company', false);
Session.set('editing_address', false);
Session.set('editing_city', false);
Session.set('editing_county', false);
Session.set('editing_state', false);
Session.set('editing_zip', false);
Session.set('editing_phone', false);
Session.set('editing_fax', false);
Session.set('editing_email', false);
Session.set('editing_web', false);


Session.set('account_search_term', '');



Meteor.pages({
    '/': { to: 'userProfilePageTemplate', before: checkLoggedIn },
    '/notfound': {to: 'notFound'},
    '/signin': {to: 'signin'},
    '/loading': {to: 'loading'},
    '/logout': {to: 'logout'},
    '/logs': {to: 'systemLogs'},
    '/tests': { to: 'mochaTestPage' },
    '/eula': { to: 'eulaPage' },
    '/privacy': { to: 'privacyPage' },
    '*': 'notFound'
},{
    defaults: {
            layout: {to: 'userProfilePageTemplate', before: checkLoggedIn }
    }
});

function checkLoggedIn(){
    if(!Meteor.userId()){
        this.template("landingPage");
        this.done();
    }
}