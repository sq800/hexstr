# hexstr 16 进制字符串与数字相互转换的工具库

一个用于处理十六进制字符串的 JavaScript 库

## 安装

```shell
npm i hexstr
```

## 使用示例

```js
import { hexToArray, toHex, hexToSignedNumber, hexToNumber } from "hexstr";

// 16 进制字符串转数字数组
hexToArray("1234"); // [18,52]

// 数字（数组）转换成 16 进制字符串
toHex(0x12); // "12"
toHex(0x12F); // "012F"
toHex([0x12, 0x34, 0xff]); // "1234FF"

// 16 进制字符串转成有符号整数
hexToSignedNumber("12"); // 18
hexToSignedNumber("FF"); // -1

// 16 进制字符串转无符号整数
hexToNumber("12"); // 18
hexToNumber("FF"); // 255
```

## 测试工具

vitest

## 测试覆盖率

| File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
| --------- | ------- | -------- | ------- | ------- | ----------------- |
| All files | 100     | 100      | 100     | 100     |
| index.js  | 100     | 100      | 100     | 100     |
