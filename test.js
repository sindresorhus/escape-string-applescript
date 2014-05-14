'use strict';
var assert = require('assert');
var escapeString = require('./index');

it('should correctly escape a string for use in AppleScript', function () {
	assert.strictEqual(escapeString('foo"bar'), 'foo\\"bar');
	assert.strictEqual(escapeString('foo\\bar'), 'foo\\\\bar');
	assert.strictEqual(escapeString('weird\\\\name\\"\''), 'weird\\\\\\\\name\\\\\\"\'');
});
