#! /usr/bin/env node

var sys    = require('sys');
var watchr = require('watchr');
var exec   = require('child_process').exec;
var runner = require('./runner');
var phpunit = process.argv.length > 2 ? process.argv[4] : 'phpunit';
var paths  = process.argv.length > 3 ? process.argv[2].split(',') : './tests';
var config = process.argv.length > 4 ? process.argv[3] : '--colors --no-coverage';

var watcher = new runner(sys, watchr, exec, phpunit);
watcher.setup(config);
watcher.watch(paths);
