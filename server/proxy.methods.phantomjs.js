

Meteor.methods({
    openWebPage: function (websiteUrl) {
        try{
            // PhantomBrowser.open(websiteUrl);
            //return 'not implemented yet';
            this.unblock();

            var result = Meteor.http.call("GET", "http://staging.vonvo.com");
            if (result.statusCode === 200){
                return "success";
            }else{
                return 'boo';
            }
        }catch(error){
            console.log(error);
        }
    },
    confirmTitle: function (options) {
        try{
            this.unblock();

            var result = Meteor.http.call("GET", "http://staging.vonvo.com");
            if (result.statusCode === 200){
                return result;
            }else{
                return 'didnt get a 200 response';
            }
        }catch(error){
            console.log(error);
        }
    },
    confirmElementIsDisplayed: function (element) {
        try{
            //return $(element).is(':visible');
            return 'not implemented yet';
        }catch(error){
            console.log(error);
        }
    },
    confirmUserCredentials: function (options) {
        try{

            //assert.equal(true, 'driver.findElement(webdriver.By.id("userName")).contains("Guest")');
            //assert.equal(true, driver.findElement(webdriver.By.id("userId")).contains("null"));

            //var result = {id:"", name:""}
            //var result = {id: userId, name: userName}
            //var result = {id: $('#userId).html(), name: $('#userName).html()}
            //return result;
            return 'not implemented yet';
        }catch(error){
            console.log(error);
        }
    },
    clickOnElement: function (element) {
        try{
            //return $(element).click();
            return 'not implemented yet';
        }catch(error){
            console.log(error);
        }
    },
    confirmElementsAreDisplayed: function (payload) {
        try{
//            var result;
//            for (var element in payload) {
//                result.element = $(element).is(':visible');
//            }
//            return result;
            return 'not implemented yet';
        }catch(error){
            console.log(error);
        }
    },
    confirmRoomMetadata: function (options) {
        try{
            return 'not implemented yet';
        }catch(error){
            console.log(error);
        }
    },
    getElementHtml: function (options) {
        try{
            //return $(element).html();
            return 'not implemented yet';
        }catch(error){
            console.log(error);
        }
    }
});






//// a detailed example which works, but which is very expensive and times out
//Meteor.methods({
//    sampleEvaluationFunction: function (options) {
//        try{
//            console.log('getBackgroundColor-------------------------');
//            var future = new Future;
//            //var cb = future.resolver();
//
//            var backgroundColorResult = 'null';
//            if(phantomjs){
//                phantomjs.create(function(err,phantom) {
//                    phantom.createPage(function(err,page) {
//                        page.open("http://www.google.com", function(err,status) {
//                            console.log('status: ' + status);
//                            page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', function(err) {
//                                return setTimeout(function() {
//                                    var result = page.evaluate(function() {
//                                        //Get what you want from the page using jQuery. A good way is to populate an object with all the jQuery commands that you need and then return the object.
//                                        return document.body.bgColor;
//                                    }, function(err,result) {
//                                        if(err){
//                                            console.log('err: ' + err);
//                                            backgroundColorResult = "error" + err;
//                                        }
//                                        else if(result){
//                                            console.log('result: ' + result);
//                                            backgroundColorResult = result;
//                                            future.ret(result);
//                                        }else{
//                                            console.log('neither err nor result, apparently');
//                                        }
//                                        phantom.exit();
//                                    });
//                                }, 3000);
//                            });
//                        });
//                    });
//                });
//            }
//            console.log('waiting for future to resolve...');
//            return future.wait();
//            //console.log('backgroundColorResult: ' + backgroundColorResult);
//            //return backgroundColorResult;
//
//        }catch(error){
//            console.log(error);
//        }
//    }
//});




