# promisify-wxmp-util

[![NPM version](https://badge.fury.io/js/promisify-wxmp-util.svg)](https://badge.fury.io/js/promisify-wxmp-util) [![dependencies Status](https://david-dm.org/hanai/promisify-wxmp-util/status.svg)](https://david-dm.org/hanai/promisify-wxmp-util) [![devDependencies Status](https://david-dm.org/hanai/promisify-wxmp-util/dev-status.svg)](https://david-dm.org/hanai/promisify-wxmp-util?type=dev)

Promisify Wexin Mini Program Util
Promise 化调用微信小程序 API 的工具

## Description

使用 Promise 的方式调用微信小程序的 API（依赖 Proxy 实现懒初始化）

## Installation

```shell
$ npm install promisify-wxmp-util --save
```

## Usage

```js
import pwxmpu from "promisify-wxmp-util";

pwxmpu
  .getStorage({
    key: "name",
  })
  .then((res) => {
    console.log(res);
  });
```
