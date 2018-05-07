# promisify-wxmp-util

[![NPM version](https://badge.fury.io/js/promisify-wxmp-util.svg)](http://badge.fury.io/js/promisify-wxmp-util) [![dependencies Status](https://david-dm.org/hanai/promisify-wxmp-util/status.svg)](https://david-dm.org/hanai/promisify-wxmp-util) [![devDependencies Status](https://david-dm.org/hanai/promisify-wxmp-util/dev-status.svg)](https://david-dm.org/hanai/promisify-wxmp-util?type=dev)

Promisify Wexin Mini Program Util

## Installation

``` shell
$ npm install promisify-wxmp-util --save
```

## Usage

``` js
import pwxmpu from 'promisify-wxmp-util';

pwxmpu.getStorage({
  key: 'name'
}).then(res => {
  console.log(res);
})
```
