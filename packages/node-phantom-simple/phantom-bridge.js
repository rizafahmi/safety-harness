var Future = Npm.require("fibers/future");
var phantomjs = Npm.require("node-phantom-simple");


// KEEP THIS, FOR WHEN WE WANT TO MAKE A PROPER OBJECT
// IT HAS A FUTURE.RESOLVER() PATTERN
//PhantomBrowser = {
//    activePage = null;
//    activePhantom = null;
//
//    createBrowser: function (page) {
//        var future = new Future;
//        var cb = future.resolver();
//
//        if(!activePhantom){
//            phantomjs.create(function(err,phantom) {
//                activePhantom = phantom;
//            });
//        }
//        if(!activePage){
//            phantom.createPage(function(err,page) {
//                activePage = page
//            });
//        }
//
//        //webpage(url, pathToPng, options, cb);
//        //webpage(url, pathToPng, options, cb);
//
//        future.wait();
//        return true;
//    },
//    loadPage: function(url){
//        return 'foo';
//    }
//}

//  keep this one without futures

//var PhantomBrowser = {
//    createBrowser: function () {
//        if(phantomjs){
//            if(!PhantomBrowser.activePhantom){
//                phantomjs.create(function(err,phantom) {
//                    PhantomBrowser.activePhantom = phantom;
//                });
//            }
//        }
//    },
//    createPageCanvas: function () {
//        if(phantomjs){
//            if(!PhantomBrowser.activePage){
//                PhantomBrowser.activePhantom.createPage(function(err,page) {
//                    PhantomBrowser.activePage = page;
//                });
//            }
//        }
//    },
//    getActivePhantom: function(){
//        return PhantomBrowser.activePhantom;
//    },
//    getActivePage: function(){
//        return PhantomBrowser.activePage;
//    },
//    loadPage: function(url){
//        return setTimeout(function(){
//            return url;
//        }, 4000);
//    }
//}
