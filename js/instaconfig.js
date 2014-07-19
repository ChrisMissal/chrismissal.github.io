var userFeed = new Instafeed({
    get: 'user',
    userId: 365726455,
    accessToken: '365726455.467ede5.d5bed85b653d4bc1ae1276001c2060fb',
    template: '<div class="col-xs-6 col-sm-6 col-md-3 col-lg-2"><a href="{{link}}" class="thumbnail"><img src="{{model.images.low_resolution.url}}" data-src="{{model.images.low_resolution.url}}" alt="{{caption}}" height="150" width="150" /></a></div>'
});
userFeed.run();
