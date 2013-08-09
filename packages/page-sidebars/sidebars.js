
toggleLeftSidebar = function(){
    console.group("Toggling sidebar...");

    var body = $('body');
    var pageslide = $('#leftSidebar');
    var _sliding = false;   // Mutex to assist closing only once
    var slidespeed = 200;
    var slideWidth = pageslide.outerWidth(true);
    var bodyAnimateIn = {};
    var slideAnimateIn = {};

    console.log('sidebar is visible: ' + pageslide.is(':visible'));
    if(pageslide.is(':visible')) {
        closeLeftPageSlide();
    }else if(pageslide.is(':hidden') ) {
        startLeftPageSlide(slidespeed );
    }


    // open the pageslide
    function startLeftPageSlide( speed ) {
        console.log('sliding open... ');

        // If the slide is open or opening, just ignore the call
        if( pageslide.is(':visible') || _sliding ) return;
        _sliding = true;

        // set animation parameters, based on pageslide direction
        pageslide.css({ left: '-' + slideWidth + 'px', right: 'auto' });
        bodyAnimateIn['margin-left'] = '+=' + slideWidth;
        slideAnimateIn['left'] = '+=' + slideWidth;

        // Animate the slide, and attach this slide's settings to the element
        body.animate(bodyAnimateIn, speed);
        pageslide.show().animate(slideAnimateIn, speed, function() {
            _sliding = false;
        });
    }

    //Close the pageslide
    closeLeftPageSlide = function( callback ) {
        console.log('sliding close... ');

        // If the slide isn't open, just ignore the call
        if(pageslide.is(':hidden') || _sliding ) return;
        _sliding = true;

        // set animation parameters, based on pageslide direction
        bodyAnimateIn['margin-left'] = '-=' + slideWidth;
        slideAnimateIn['left'] = '-=' + slideWidth;

        // Animate the slide, and attach this slide's settings to the element
        pageslide.animate(slideAnimateIn, slidespeed);
        body.animate(bodyAnimateIn, slidespeed, function() {
            pageslide.hide();
            _sliding = false;
            if( typeof callback != 'undefined' ) callback();
        });
    }
    console.groupEnd();
}





//
//togglePageSlide = function(){
//    var body = $('body');
//    var pageslide = $('#pageslide');
//    var _sliding = false;   // Mutex to assist closing only once
//    var slidespeed = 200;
//    //var slidedirection = "left";
//    var slideWidth = pageslide.outerWidth(true);
//    var bodyAnimateIn = {};
//    var slideAnimateIn = {};
//
//    console.log('slideWidth: ' + slideWidth);
//
//    if(pageslide.is(':visible')) {
//        closePageSlide(function(){
//            //closePageSlide(slidedirection, function(){
//            // callback on close
//        });
//    }else if(pageslide.is(':hidden') ) {
//        //startPageSlide( slidedirection, slidespeed );
//        startPageSlide(slidespeed );
//    }
//
//
//    // open the pageslide
//    //function startPageSlide( direction, speed ) {
//    function startPageSlide( speed ) {
//        console.log('starting pageslide... ');
//
//        // If the slide is open or opening, just ignore the call
//        console.log('$pageslide:visible: ' + pageslide.is(':visible'));
//        if( pageslide.is(':visible') || _sliding ) return;
//        _sliding = true;
//
//        // set animation parameters, based on pageslide direction
//        //console.log('direction: ' + direction);
//        //switch( direction ) {
//            //case 'left':
//                //console.log('sliding left...');
//                //pageslide.css({ left: 'auto', right: '-' + slideWidth + 'px' });
//                //bodyAnimateIn['margin-left'] = '-=' + slideWidth;
//                //slideAnimateIn['right'] = '+=' + slideWidth;
//                //break;
//            //default:
//                console.log('sliding right...');
//                pageslide.css({ left: '-' + slideWidth + 'px', right: 'auto' });
//                bodyAnimateIn['margin-left'] = '+=' + slideWidth;
//                slideAnimateIn['left'] = '+=' + slideWidth;
//                //break;
//        //}
//        console.log('bodyAnimateIn: ' + bodyAnimateIn);
//        console.log('slideAnimateIn: ' + slideAnimateIn);
//
//        // Animate the slide, and attach this slide's settings to the element
//        body.animate(bodyAnimateIn, speed);
//        pageslide.show().animate(slideAnimateIn, speed, function() {
//            _sliding = false;
//        });
//    }
//
//    //Close the pageslide
//        //closePageSlide = function(direction, callback ) {
//        closePageSlide = function( callback ) {
//
//        // If the slide isn't open, just ignore the call
//        if(pageslide.is(':hidden') || _sliding ) return;
//        _sliding = true;
//
//        // set animation parameters, based on pageslide direction
//        //switch(direction) {
//            //case 'left':
//                //bodyAnimateIn['margin-left'] = '+=' + slideWidth;
//                //slideAnimateIn['right'] = '-=' + slideWidth;
//                //break;
//            //default:
//                bodyAnimateIn['margin-left'] = '-=' + slideWidth;
//                slideAnimateIn['left'] = '-=' + slideWidth;
//                //break;
//        //}
//
//        // Animate the slide, and attach this slide's settings to the element
//        pageslide.animate(slideAnimateIn, slidespeed);
//        body.animate(bodyAnimateIn, slidespeed, function() {
//            pageslide.hide();
//            _sliding = false;
//            if( typeof callback != 'undefined' ) callback();
//        });
//    }
//}
