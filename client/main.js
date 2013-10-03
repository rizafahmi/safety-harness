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

Session.setDefault('browser_window_location', 'http://todos.meteor.com');
Session.setDefault('is_submitting_url', false);




Router.map(function() {
//    // TODO:  set access-control-allow-origin as our response header
//    this.route('testsRoute', { path: '/tests', where: 'server'}, function(){
//        this.response.setHeader('access-control-allow-origin', '*');
//        var fs = Npm.require("fs");
//        return fs.readFileSync("/public/page.mocha.html", "utf8");
//    });

//    TODO:  set access-control-allow-origin as our response header
//    this.route('mochaTestPageClient', {path: '/tests', where: 'client', template: 'mochaTestPage'});

    this.route('home_route', {path: '/', template: 'homePage'});
    this.route('about_route', {path: '/about', template: 'aboutPage'});
    this.route('tests_route', {path: '/tests', template: 'mochaTestPage'});
    this.route('tutorial_route', {path: '/tutorial', template: 'tutorialPage'});
    this.route('features_route', {path: '/features', template: 'featuresPage'});
    this.route('default_route', {path: '*', template: 'mochaTestPage'});
});
