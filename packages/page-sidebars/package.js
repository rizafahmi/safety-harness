Package.describe({
  summary: "Meteorite package that pageslide functionality."
});

Package.on_use(function (api) {
    api.use('jquery');

    api.add_files('sidebars.js', "client");
});
