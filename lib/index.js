'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var promisify = exports.promisify = function promisify(func) {
  return function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return new Promise(function (resolve, reject) {
      var ret = func(Object.assign(opts, {
        success: function success() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          resolve.apply(undefined, _toConsumableArray(args).concat([ret]));
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