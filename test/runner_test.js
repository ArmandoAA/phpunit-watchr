var assert = require('assert');
var sinon  = require('sinon');
var watchr = require('watchr');

describe('Runner', function() {

	var runner = require('../lib/runner');

	it('should detect if PHPUnit is installed', function(done) {
		var watcher  = sinon.mock(watchr).expects('start').once();
		var sut      = new runner();

		sut.start();
		assert.equal('phpunit --version', exec.getCall(0).args[0]);
		assert.ok(watcher.calledOnce);
		watchr.watch.restore();
		done();
	});

	it('should not watch directory if PHPUnit is not available', function(done) {
		var watcher  = sinon.mock(watchr).expects('start').never();
		var response = sinon.stub('NOT', 'match').withArgs(/^PHPUnit/).returns(false);
		var exec     = sinon.stub().withArgs('phpunit --version').returns({}, response);
		var sut = new runner();

		sut.start();
		assert.ok(exec.calledOnce);
		assert.equal('phpunit --version', exec.getCall(0).args[0]);
		watchr.watch.restore();
		done();
	});

	it('should default configuration to colors', function(done) {
		var sut = new runner();
		assert.equal(sut.getOptions(), '--colors');
		done();
	});

	it('can set configuration for PHPUnit', function(done) {
		var sut = new runner();
		sut.setup('--strict');
		assert.equal(sut.getOptions(), '--strict');
		done();
	});
});
