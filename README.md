# promisify-wxmp-util

Promisify Wexin Mini Program Util

## Usage

``` js
import pwxmpu from 'promisify-wxmp-util';

pwxmpu.getStorage({
  key: 'name'
}).then(res => {
  console.log(res);
})
```
