//assert = chai.assert;
//expect = chai.expect;
//should = chai.should();
//
//
//describe('Meteor Examples', function(){
//    describe('Leaderboard - HTTP Proxy Tests', function(){
//        var webpage = null;
//        it('opening http://leaderboard.meteor.com with proxy HTTP...', function(done){
//            Meteor.call('requestSimpleWebPage', 'http://leaderboard.meteor.com', function (error, result){
//                webpage = result;
//                if(result){
//                    assert.equal(true, true);
//                }else{
//                    assert.equal(false, true);
//                }
//                done();
//            });
//        });
//        it('confirm title is "Leaderboard"...  ', function(done){
//            Meteor.call('confirmTitle', function (error, result){
//                var title = $(webpage).filter("title").text();
//                assert.equal(title, 'Leaderboard');
//                done();
//            });
//        });
//    });
//});
//
