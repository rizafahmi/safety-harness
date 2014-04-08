var Future = Npm.require("fibers/future");
phantomjs = Npm.require("node-phantom-simple");


Meteor.methods({
  confirmBridge: function(options) {
    try {
      console.log('confirmBridge-------------------------');
      if (phantomjs) {
        return "initiated!";
      } else {
        return 'boo';
      }
    } catch (error) {
      console.log(error);
    }
  },
  getBackgroundColor: function(options) {
    try {
      console.log('getBackgroundColor-------------------------');
      var future = new Future();
      var resolver = future.resolver();
      var result = "";

      var backgroundColorResult = 'null';
      if (phantomjs) {
        phantomjs.create(function(err, phantom) {
          phantom.createPage(function(err, page) {
            page.open("http://www.google.com", function(err, status) {
              console.log('status: ' + status);
              page.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js', function(err) {
                return setTimeout(function() {
                  var result = page.evaluate(function() {
                    //Get what you want from the page using jQuery. A good way is to populate an object with all the jQuery commands that you need and then return the object.
                    return document.body.bgColor;
                  }, function(err, result) {
                    if (err) {
                      console.log('err: ' + err);
                      backgroundColorResult = "error" + err;
                    } else if (result) {
                      console.log('result: ' + result);
                      backgroundColorResult = result;
                      future.
                      return (result);
                    } else {
                      console.log('neither err nor result, apparently');
                    }
                    phantom.exit();
                  });
                }, 3000);
              });
            });
          });
        });
      }
      console.log('waiting for future to resolve...');
      return future.wait();
    } catch (error) {
      console.log(error);
    }
  }
});
