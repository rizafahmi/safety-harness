Package.describe({
  summary: "Meteorite package that adds page transitions."
});

Package.on_use(function (api) {
    api.use('jquery');

    api.add_files('jquery.mobile.transition.less', "client");
    api.add_files('jquery.mobile.transition.flip.less', "client");
    api.add_files('jquery.mobile.transition.flow.less', "client");
    api.add_files('jquery.mobile.transition.pop.less', "client");
    api.add_files('jquery.mobile.transition.slide.less', "client");
    api.add_files('jquery.mobile.transition.slidedown.less', "client");
    api.add_files('jquery.mobile.transition.slidefade.less', "client");
    api.add_files('jquery.mobile.transition.slidein.keyframes.less', "client");
    api.add_files('jquery.mobile.transition.slideout.keyframes.less', "client");
    api.add_files('jquery.mobile.transition.slideup.less', "client");
    api.add_files('jquery.mobile.transition.turn.less', "client");
    api.add_files('jquery.mobile.transitions.less', "client");
});
