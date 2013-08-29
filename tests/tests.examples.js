assert = chai.assert;
expect = chai.expect;
should = chai.should();


describe('Meteor Examples', function(){
    describe('Todos - HTTP Proxy Tests', function(){
        var webpage = null;
        it('opening http://todos.meteor.com with proxy HTTP...', function(done){
            Meteor.call('requestSimpleWebPage', 'http://todos.meteor.com', function (error, result){
                webpage = result;
                if(result){
                    assert.equal(true, true);
                }else{
                    assert.equal(false, true);
                }
                done();
            });
        });
        it('confirm title is "Todos"...  ', function(done){
            Meteor.call('confirmTitle', function (error, result){
                var title = $(webpage).filter("title").text();
                assert.equal(title, 'Todos');
                done();
            });
        });
    });
    describe('Parties - HTTP Proxy Tests', function(){

        var webpage = null;
        it('opening http://parties.meteor.com with proxy HTTP...', function(done){
            Meteor.call('requestSimpleWebPage', 'http://parties.meteor.com', function (error, result){
                webpage = result;
                if(result){
                    assert.equal(true, true);
                }else{
                    assert.equal(false, true);
                }
                done();
            });
        });
        it('confirm title is "Parties"...  ', function(done){
            Meteor.call('confirmTitle', function (error, result){
                var title = $(webpage).filter("title").text();
                assert.equal(title, 'Parties');
                done();
            });
        });
    });
    describe('Leaderboard - HTTP Proxy Tests', function(){
        var webpage = null;
        it('opening http://leaderboard.meteor.com with proxy HTTP...', function(done){
            Meteor.call('requestSimpleWebPage', 'http://leaderboard.meteor.com', function (error, result){
                webpage = result;
                if(result){
                    assert.equal(true, true);
                }else{
                    assert.equal(false, true);
                }
                done();
            });
        });
        it('confirm title is "Leaderboard"...  ', function(done){
            Meteor.call('confirmTitle', function (error, result){
                var title = $(webpage).filter("title").text();
                assert.equal(title, 'Leaderboard');
                done();
            });
        });
        it('circumvent XmlHttpRequest same-origin policy...', function(done){
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
    });
});

