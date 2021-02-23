export const promisify = (func) => {
  return (opts = {}) => {
    return new Promise((resolve, reject) => {
      opts = Object.assign({}, opts, {
        success(res) {
          // save return value of API to `ret`
          resolve(Object.assign({}, res, { ret }));
        },
        fail(err) {
          reject(err);
        }
      });
      const ret = func(opts);
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
