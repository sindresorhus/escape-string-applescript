'use strict';
var test = require('ava');
var escapeString = require('./');

test('escape a string for use in AppleScript', function (t) {
	t.assert(escapeString('foo"bar') === 'foo\\"bar');
	t.assert(escapeString('foo\\bar') === 'foo\\\\bar');
	t.assert(escapeString('weird\\\\name\\"\'') === 'weird\\\\\\\\name\\\\\\"\'');
	t.assert(escapeString(null) === null);
});
