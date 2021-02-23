"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.promisify = void 0;

var promisify = function promisify(func) {
  return function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve, reject) {
      opts = Object.assign({}, opts, {
        success: function success(res) {
          // save return value of API to `ret`
          resolve(Object.assign({}, res, {
            ret: ret
          }));
        },
        fail: function fail(err) {
          reject(err);
        }
      });
      var ret = func(opts);
    });
  };
};

exports.promisify = promisify;
var pwxmpu = new Proxy({}, {
  get: function get(obj, prop) {
    if (Reflect.has(obj, prop)) {
      return Reflect.get(obj, prop);
    } else if (typeof wx[prop] !== 'undefined') {
      var func = promisify(wx[prop]);
      obj[prop] = func;
      return func;
    } else {
      return new Error("Cannot read property '".concat(prop, "' of wx"));
    }
  }
});
var _default = pwxmpu;
exports["default"] = _default;