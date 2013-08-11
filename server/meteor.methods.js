//assert = require('chai').assert;

//var phantom=require('node-phantom');

//--------------------------------------------------------------------------
// Server Side Helper Functions
//
// requires Meteor.call() from the client to initiate
// used to validate data before inserting new tasks into the database

Meteor.methods({

    //--------------------------------------------------------------------------
    // Server Side Helper Functions

    pingTest: function (options) {
        try{
            return "pong";
        }catch(error){
            console.log(error);
        }
    },
    pingTestWithObject: function (payload) {
        try{
            if(payload){
                return "received!";
            }else{
                return "no object, boo...";
            }
        }catch(error){
            console.log(error);
        }
    },
    pingTestReturnsObject: function (options) {
        try{
            var beverages = { cider: [ 'apple', 'pear', 'stout' ] };
            return beverages;
        }catch(error){
            console.log(error);
        }
    },
    pingTestObjectRoundTrip: function (payload) {
        try{
            var beverages = { cider: [ 'apple', 'pear', 'stout' ] };
            payload.cider = beverages.cider;
            return payload;
        }catch(error){
            console.log(error);
        }
    }
});



