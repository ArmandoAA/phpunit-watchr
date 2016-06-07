var watchr = require('watchr');
var exec = require('child_process').exec;

/**
 * @class Runner
 * Provides a file watcher executing phpunit on file changes
 */
var runner = function () {

    /**
     * phpunit command line parameter
     * @type {string}
     */
    this.options = '--colors';

    /**
     * phpunit executable
     * @type {string}
     */
    this.phpunit = 'phpunit';

    /**
     * list of paths to watch for changes (recursivly)
     * @type {Array}
     */
    this.pathList = [];

};

/**
 * @method
 * Handles the file change events executing phpunit
 * @param change
 * @param file
 */
runner.prototype.fileChange = function (change, file) {
    if (!file.match(/\.php$/)) {
        return;
    }

    if (!(change == 'create' || change == 'update')) {
        return;
    }

    exec(this.phpunit + ' ' + this.options + ' ' + file, function (error, stdout) {
        console.log(stdout);
    });
};

/**
 * @method
 * Checks whether a version of phpunit exists under the provided path
 *
 * @param callback
 */
runner.prototype.checkPhpUnitInstalled = function (callback) {
    exec(this.phpunit + ' --version', function (error, stdout) {
        if (stdout.match(/^PHPUnit/)) {
            callback();
            return true;
        }
        console.log('PHPUnit not found under ' + this.path);
        return false;
    });
};

/**
 * @method
 * Set configuration
 *
 * @param {{}} config
 */
runner.prototype.setOptions = function (config) {
    if (config.options && config.options !== null) {
        this.options = config.options;
    }
    if (config.pathList && config.pathList !== null) {
        this.pathList = config.pathList;
    }
    if (config.phpunit && config.phpunit !== null) {
        this.phpunit = config.phpunit;
    }
};

/**
 * @method
 * Returns the current configuration for the runner
 *
 * @return {{}}
 */
runner.prototype.getOptions = function () {
    return {
        options: this.options,
        pathList: this.pathList,
        phpunit: this.phpunit
    };
};

/**
 * @method
 * Start the file system watch
 */
runner.prototype.start = function () {
    var me = this;
    this.checkPhpUnitInstalled(function () {
        console.log('');
        console.log('Waiting for file changes...');
        console.log('');
        
        watchr.watch({
            paths: me.pathList,
            listeners: {
                change: me.fileChange.bind(me)
            }
        });
    });
};

module.exports = runner;
