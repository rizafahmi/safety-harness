//assert = chai.assert;
//expect = chai.expect;
//should = chai.should();
//
//
//describe('Meteor Examples', function(){
//    describe('Parties - HTTP Proxy Tests', function(){
//
//        var webpage = null;
//        it('opening http://parties.meteor.com with proxy HTTP...', function(done){
//            Meteor.call('requestSimpleWebPage', 'http://parties.meteor.com', function (error, result){
//                webpage = result;
//                if(result){
//                    assert.equal(true, true);
//                }else{
//                    assert.equal(false, true);
//                }
//                done();
//            });
//        });
//        it('confirm title is "Parties"...  ', function(done){
//            Meteor.call('confirmTitle', function (error, result){
//                var title = $(webpage).filter("Parties").text();
//                assert.equal(title, 'Todos');
//                done();
//            });
//        });
//    });
//});
//
