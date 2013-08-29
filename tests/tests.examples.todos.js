//assert = chai.assert;
//expect = chai.expect;
//should = chai.should();
//
//describe('Meteor Examples', function(){
//    describe('Todos - HTTP Proxy Tests', function(){
//        var webpage = null;
//        it('opening http://todos.meteor.com with proxy HTTP...', function(done){
//            Meteor.call('requestSimpleWebPage', 'http://todos.meteor.com', function (error, result){
//                webpage = result;
//                if(result){
//                    assert.equal(true, true);
//                }else{
//                    assert.equal(false, true);
//                }
//                done();
//            });
//        });
//        it('confirm title is "Todos"...  ', function(done){
//            Meteor.call('confirmTitle', function (error, result){
//                var title = $(webpage).filter("title").text();
//                assert.equal(title, 'Todos');
//                done();
//            });
//        });
//    });
//});
//
