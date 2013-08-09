Meteor.startup(function () {
    Meteor.Keybindings.add({
        'alt+a' : function () { console.info('alt+a'); },
        'esc' : function () {   console.info('esc pressed'); },
        'return' : function () {   console.info('return pressed'); }
    });

});