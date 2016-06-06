#! /usr/bin/env node

var runner = require('./runner');
var phpunit = process.argv.length > 2 ? process.argv[2] : 'phpunit';
var paths  = process.argv.length > 3 ? process.argv[3].split(',') : './tests';
var config = process.argv.length > 4 ? process.argv[4] : '--colors';

var watcher = new runner(phpunit);
watcher.setup(config);
watcher.watch(paths);
