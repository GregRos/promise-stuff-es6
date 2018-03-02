# Promise-stuff-es6
[![npm](https://badge.fury.io/js/promise-stuff-es6.svg )](https://www.npmjs.com/package/promise-stuff-es6)

Integrates the [`promise-stuff`](https://github.com/GregRos/promise-stuff) package with the native ES6 Promise. This requires very little code, and this package is mainly provided for convenience.

Import this package in your code to make it work.

    import "promise-stuff-es6";

This package will modify `Promise.prototype`. Do not use this package if your code will be reused in other projects, unless you've thought about what you're doing.