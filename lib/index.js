'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var promisify = exports.promisify = function promisify(func) {
  return function (opts) {
    return new Promise(function (resolve, reject) {
      func(Object.assign(opts, {
        success: function success() {
          resolve.apply(undefined, arguments);
        },
        fail: function fail() {
          reject.apply(undefined, arguments);
        }
      }));
    });
  };
};

var pwxmpu = new Proxy({}, {
  get: function get(obj, prop) {
    if (Reflect.has(obj, prop)) {
      return Reflect.get(obj, prop);
    } else if (typeof wx[prop] !== 'undefined') {
      var func = promisify(wx[prop]);
      obj[prop] = func;
      return func;
    } else {
      return new Error('Cannot read property \'' + prop + '\' of wx');
    }
  }
});

exports.default = pwxmpu;