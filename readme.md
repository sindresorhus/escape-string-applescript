# escape-string-applescript

> Escape a string for use in AppleScript

According to the AppleScript [docs](https://developer.apple.com/library/mac/documentation/AppleScript/Conceptual/AppleScriptLangGuide/reference/ASLR_classes.html#//apple_ref/doc/uid/TP40000983-CH1g-DontLinkElementID_57), `\` and `"` have special meaning and should be escaped.

## Install

```
$ npm install escape-string-applescript
```

## Usage

```js
import {execFile} from 'child_process';
import escapeStringAppleScript from 'escape-string-applescript';

const string = escapeStringAppleScript('"i like unicorns"');
//=> '\"i like unicorns\"'

const script = `set unicornMessage to "${string}"`;

execFile('osascript', ['-e', script]);
```

## Related

- [run-applescript](https://github.com/sindresorhus/run-applescript) - Run AppleScript and get the result
