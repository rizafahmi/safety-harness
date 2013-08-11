Package.describe({
  summary: "launch and run phantom tests"
});

Npm.depends({
    'commander': '2.0.0',
    'chai': '1.7.2'
});


Package.on_use(function (api) {

  //var path = Npm.require("path");
  //var fs = Npm.require("fs");
  //var util = Npm.require("util");

    var program = Npm.require('commander');
    var spawn = Npm.require('child_process').spawn;
    var print = Npm.require('util').print;
    var fs = Npm.require('fs');
    var path = Npm.require('path');

    var chai = Npm.require('chai');
    var expect = Npm.require('chai').expect;
    var url = Npm.require('url');


  api.add_files([
      'phantom-tests/failing.js',
      'phantom-tests/iframe.js',
      'phantom-tests/many.js',
      'phantom-tests/mixed.js',
      'phantom-tests/mocha-phantomjs.js',
      'phantom-tests/passing.js',
      'phantom-tests/requirejs-app.js',
      'phantom-tests/slow.js',

      'meteor-methods-phantom.js',
      'core_extensions.js',
      "mocha-phantomjs.js"
  ], ["server"]);

});
