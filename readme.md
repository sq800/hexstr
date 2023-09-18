# hexstr

A JavaScript library for convert hexadecimal string.

一个用于转换十六进制字符串的 JavaScript 库。


## Install / 安装

```shell
npm i hexstr
```

## Usage / 用法

```js
import { hexToArray, toHex, hexToSignedNumber, hexToNumber } from "hexstr";

hexToArray("1234"); // [18,52]

toHex(0x12); // "12"
toHex(0x12f); // "012F"
toHex([0x12, 0x34, 0xFF]); // "1234FF"

hexToSignedNumber("12"); // 18
hexToSignedNumber("FF"); // -1

hexToNumber("12"); // 18
hexToNumber("FF"); // 255
```

## Test Tool / 测试工具

vitest

## Test Coverage / 测试覆盖率

| File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| --------- | ------- | -------- | ------- | ------- | ----------------- |
| All files | 100     | 100      | 100     | 100     |
| index.js  | 100     | 100      | 100     | 100     |
