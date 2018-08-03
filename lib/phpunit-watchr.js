#! /usr/bin/env node
var runner = require('./runner');
var paths  = process.argv.length > 2 ? process.argv[2].split(',') : null;
var options = process.argv.length > 3 ? process.argv[3] : null;

var config = {
    options: options,
    pathList: paths
};

var watcher = new runner();
watcher.setOptions(config);
watcher.start();
