assert = chai.assert;
expect = chai.expect;
should = chai.should();

var foo = 'bar';
var beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };



var serverResult = false;
describe('PhantomJS Acceptance Tests', function(){
    describe('lets try firing up phantomJS...  ', function(){
        it('lets check that the phantomjs bridge exists...', function(done){
            Meteor.call('confirmBridge', function (error, result){
                assert.equal(result, 'initiated!');
                done();
            });
        });
        it('can we get the page background color?', function(done){
            Meteor.call('getBackgroundColor', beverages, function (error, result){
                assert.equal(result, '#fff');
                done();
            });
        });
        it('place phantomjs instance in Deps.autorun singleton...', function(done){
            assert.equal(false, true);
        });
        it('assert page has element...', function(done){
            assert.equal(false, true);
        });
        it('click on page element...', function(done){
            assert.equal(false, true);
        });
        it('confirm new page renders...', function(done){
            assert.equal(false, true);
        });
//        it('lets request the server to fire up a phantom instance...', function(done){
//            Meteor.call('getActivePhantom', function (error, result){
//                assert.equal(result, 'created!');
//                done();
//            });
//        });
//        it('lets request the server to fire up a phantom instance...', function(done){
//            Meteor.call('getActivePage', function (error, result){
//                assert.equal(result, 'created!');
//                done();
//            });
//        });
//        it('lets request the server to fire up a phantom instance...', function(done){
//            Meteor.call('initiatePhantom', function (error, result){
//                assert.equal(result, 'created!');
//                done();
//            });
//        });
//
//
//        it('can we ask for an server to initialize a page?', function(done){
//            Meteor.call('initializePage', beverages, function (error, result){
//                assert.equal(result, 'abigail');
//                done();
//            });
//        });
//        it('lets request the server load up a website...', function(done){
//            Meteor.call('loadWebsite', function (error, result){
//                assert.equal(result, 'success');
//                done();
//            });
//        });
    });
});




