#! /usr/bin/env node

var runner = require('./runner');
var phpunit = process.argv.length > 2 ? process.argv[2] : null;
var paths  = process.argv.length > 3 ? process.argv[3].split(',') : null;
var options = process.argv.length > 4 ? process.argv[4] : null;

var config = {
    options: options,
    pathList: paths,
    phpunit: phpunit
};

var watcher = new runner();
watcher.setOptions(config);
watcher.start();
