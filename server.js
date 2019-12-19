#!/usr/bin/env node
port = process.env.PORT || 80

var prerender = require('./lib');

var server = prerender({
    chromeLocation: '/app/.apt/usr/bin/google-chrome'
});
server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
