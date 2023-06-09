"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToNumber = exports.hexToSignedNumber = exports.numberToHex = exports.arrayToHex = exports.toHex = exports.hexToArray = void 0;
/**
 * 16 进制字符串转数字数组
 *
 * @param {string} hexString 待转换的 16 进制字符串
 */
function hexToArray(hexString) {
    var hex = hexString.replace(/\s/g, '');
    var arr = [];
    for (var i = 0; i < hex.length; i += 2) {
        var item = hex.slice(i, i + 2);
        arr.push(parseInt(item, 16));
    }
    return arr;
}
exports.hexToArray = hexToArray;
/**
 * 数字（数组）转换成 16 进制字符串
 *
 * @param {number|number[]} input 数字（数组）
 */
function toHex(input) {
    if (Array.isArray(input)) {
        return arrayToHex(input);
    }
    else {
        return numberToHex(input);
    }
}
exports.toHex = toHex;
/**
 * 数字数组转换成 16 进制字符串
 *
 * @param {number[]} arr 数字数组
 */
function arrayToHex(arr) {
    var hexString = "";
    for (var i = 0; i < arr.length; i++) {
        var hexValue = numberToHex(arr[i]);
        hexString += hexValue;
    }
    return hexString.toUpperCase();
}
exports.arrayToHex = arrayToHex;
/**
 * 数字转换成 16 进制字符串
 *
 * @param {number} num 数字
 */
function numberToHex(num) {
    if (num > 0xff || num < 0) {
        throw new Error("The input number is out of range.");
    }
    var hex = num.toString(16).toUpperCase();
    return hex.length % 2 == 1 ? "0" + hex : hex;
}
exports.numberToHex = numberToHex;
/**
 * 16 进制字符串转成有符号整数
 *
 * @param {string} hex 16进制字符串
 */
function hexToSignedNumber(hex) {
    if (hex.length % 2 != 0) {
        hex = "0" + hex;
    }
    var num = parseInt(hex, 16);
    var maxVal = Math.pow(2, (hex.length / 2) * 8); // max unsigned interger
    if (num > maxVal / 2 - 1) { // if num greater than max signed interger
        num = num - maxVal;
    }
    return num;
}
exports.hexToSignedNumber = hexToSignedNumber;
/**
 * 16 进制字符串转无符号整数
 *
 * @param {string} hex 16 进制字符串
 */
function hexToNumber(hex) {
    return parseInt(hex, 16);
}
exports.hexToNumber = hexToNumber;
