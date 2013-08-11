//#!/usr/bin/env node


var spawn = Npm.require('child_process').spawn;
var phantomInitiated = false;
var cwd = process.cwd();
var cookies = [];
var headers = {};
var settings = {};

var phantomjs;

if (phantomjs === undefined) {
    phantomjs = spawn('phantomjs');
    phantomInitiated = true;
    console.log('we have a phantom browser!');
    //console.log(phantomjs);
}

phantomjs.stdout.on('data', function(data){
  console.log(data.toString());
})

phantomjs.on('exit', function(code){
  if (code === 127) { console.log("Perhaps phantomjs is not installed?\n"); }
  phantomInitiated = false;
  process.exit(code);
})



Meteor.methods({

    //--------------------------------------------------------------------------
    // Server Side Helper Functions

    initiatePhantom: function (options) {
        try{
            //console.log('The default user agent is ' + page.settings.userAgent);
            //return page.settings.userAgent;

            if(phantomjs){
                return "initiated!";
            }else{
                return phantomInitiated;
            }
        }catch(error){
            console.log(error);
        }
    },
    loadWebsite: function (options) {
        try{
            var phantomInitiated = false;

            if(phantomInitiated){
                return "initiated!";
            }
        }catch(error){
            console.log(error);
        }
    },
    evaluatePage: function (options) {
        try{
            return "initiated!";
        }catch(error){
            console.log(error);
        }
    }
});



