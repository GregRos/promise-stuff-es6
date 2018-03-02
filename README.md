# Promise-stuff-es6
Integrates the [`promise-stuff`](https://github.com/GregRos/promise-stuff) package with the native ES6 Promise. This requires very little code, and this package is mainly provided for convenience.

Installing this package is not enough, you also have to import it in your code. Without importing it, you'll see the type definitions, but the promise won't be extended during runtime.

    import "promise-stuff-es6";

Require will also work for most environments:

    require("promise-stuff-es6");

This will extend the `Promise` prototype with the utility methods from `promise-stuff`.

Do not use this package if your code will be reused in other projects, unless you've thought about what you're doing.