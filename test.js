import test from 'ava';
import m from './';

test(t => {
	t.is(m('foo"bar'), 'foo\\"bar');
	t.is(m('foo\\bar'), 'foo\\\\bar');
	t.is(m('weird\\\\name\\"\''), 'weird\\\\\\\\name\\\\\\"\'');
	t.is(m(null), null);
});
