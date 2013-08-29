Package.describe({
    summary: "launch and run phantom tests"
});

Npm.depends({
    'node-phantom-simple': '1.0.10'
});


Package.on_use(function (api) {

    //var path = Npm.require("path");
    //var fs = Npm.require("fs");
    //var util = Npm.require("util");
    phantomjs = Npm.require('node-phantom-simple');

    api.export('phantomjs');
    api.add_files('phantom-bridge.js', "server");
    api.add_files('methods.phantomjs.js', "server");

});
