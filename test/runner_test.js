var assert = require('assert');
var sinon  = require('sinon');
var watchr = require('watchr');

describe('Runner', function() {

	var runner = require('../lib/runner');

    it('should use default config if nothing is provided', function(done) {
        var sut = new runner();
        assert.deepEqual(sut.getOptions(), {
            options: '--colors',
            pathList: [],
            phpunit: 'phpunit'
        });
        done();
    });

    it('can set path of phpunit executable', function(done) {
        var sut = new runner();
        sut.setOptions({
            phpunit: '/project/phpunit'
        });
        assert.deepEqual(sut.getOptions(), {
            options: '--colors',
            pathList: [],
            phpunit: '/project/phpunit'
        });
        done();
    });

	it('can set configuration for PHPUnit', function(done) {
		var sut = new runner();
		sut.setOptions({
            options: '--strict'
        });
		assert.deepEqual(sut.getOptions(), {
            options: '--strict',
            pathList: [],
            phpunit: 'phpunit'
        });
		done();
	});

    it('can set paths to watch', function(done) {
        var sut = new runner();
        sut.setOptions({
            pathList: ['foo', 'bar']
        });
        assert.deepEqual(sut.getOptions(), {
            options: '--colors',
            pathList: ['foo', 'bar'],
            phpunit: 'phpunit'
        });
        done();
    });

});
