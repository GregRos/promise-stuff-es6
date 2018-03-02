# Promise-stuff-es6
Integrates the [`promise-stuff`](https://github.com/GregRos/promise-stuff) package with the native ES6 Promise. This requires very little code, and this package is mainly provided for convenience.

Contains both typings and code. To use properly, you must import this module at any point in your code:

    import "promise-stuff-es6";

This will extend the `Promise` prototype with the utility methods from `promise-stuff`.

Do not use this package if your code will be reused in other projects, unless you've thought about what you're doing.