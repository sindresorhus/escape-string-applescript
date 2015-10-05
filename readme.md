# escape-string-applescript [![Build Status](https://travis-ci.org/sindresorhus/escape-string-applescript.svg?branch=master)](https://travis-ci.org/sindresorhus/escape-string-applescript)

> Escape a string for use in AppleScript

According to the AppleScript [docs](https://developer.apple.com/library/mac/documentation/AppleScript/Conceptual/AppleScriptLangGuide/reference/ASLR_classes.html#//apple_ref/doc/uid/TP40000983-CH1g-DontLinkElementID_57) `\` and `"` have special meaning and should be escaped.


## Install

```
$ npm install --save escape-string-applescript
```


## Usage

```js
const execFile = require('child_process').execFile;
const escapeString = require('escape-string-applescript');

const str = escapeString('"i like unicorns"');
//=> '\"i like unicorns\"'

const script = 'set unicornMessage to "' + str + '"';

execFile('osascript', ['-e', script]);
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
