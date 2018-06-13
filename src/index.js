export const promisify = (func) => {
  return (opts = {}) => {
    return new Promise((resolve, reject) => {
      const ret = func(Object.assign(
        opts, {
          success(...args) {
            resolve(...args, ret);
          },
          fail(...args) {
            reject(...args);
          }
        }
      ));
    });
  }
};

const pwxmpu = new Proxy({}, {
  get(obj, prop) {
    if (Reflect.has(obj, prop)) {
      return Reflect.get(obj, prop);
    } else if (typeof wx[prop] !== 'undefined') {
      const func = promisify(wx[prop]);
      obj[prop] = func;
      return func;
    } else {
      return new Error(`Cannot read property '${prop}' of wx`);
    }
  }
});

export default pwxmpu;
