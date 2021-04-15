import test from 'ava';
import escapeStringAppleScript from './index.js';

test('main', t => {
	t.is(escapeStringAppleScript('foo"bar'), 'foo\\"bar');
	t.is(escapeStringAppleScript('foo\\bar'), 'foo\\\\bar');
	t.is(escapeStringAppleScript('weird\\\\name\\"\''), 'weird\\\\\\\\name\\\\\\"\'');
});
