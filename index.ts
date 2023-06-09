/**
 * 16 进制字符串转数字数组
 *
 * @param {string} hexString 待转换的 16 进制字符串
 */
export function hexToArray(hexString: string): number[] {
    let hex: string = hexString.replace(/\s/g, '');
    let arr: number[] = [];
    for (let i = 0; i < hex.length; i += 2) {
        let item = hex.slice(i, i + 2);
        arr.push(parseInt(item, 16));
    }
    return arr;
}

/**
 * 数字（数组）转换成 16 进制字符串
 *
 * @param {number|number[]} input 数字（数组）
 */
export function toHex(input: number | number[]): string {
    if (Array.isArray(input)) {
        return arrayToHex(input);
    } else {
        return numberToHex(input);
    }
}

/**
 * 数字数组转换成 16 进制字符串
 *
 * @param {number[]} arr 数字数组
 */
export function arrayToHex(arr: number[]): string {
    let hexString = "";
    for (let i = 0; i < arr.length; i++) {
        let hexValue = numberToHex(arr[i])
        hexString += hexValue;
    }
    return hexString.toUpperCase();
}

/**
 * 数字转换成 16 进制字符串
 *
 * @param {number} num 数字
 */
export function numberToHex(num: number): string {
    if (num > 0xff || num < 0) {
        throw new Error("The input number is out of range.");
    }
    let hex = num.toString(16).toUpperCase();
    return hex.length % 2 == 1 ? "0" + hex : hex;
}

/**
 * 16 进制字符串转成有符号整数
 *
 * @param {string} hex 16进制字符串
 */
export function hexToSignedNumber(hex: string): number {
    if (hex.length % 2 != 0) {
        hex = "0" + hex;
    }
    let num = parseInt(hex, 16);
    let maxVal = Math.pow(2, (hex.length / 2) * 8); // 1字节 256
    if (num > maxVal / 2 - 1) {                     // 1字节有符号能表示的最大值：256/2-1=127
        num = num - maxVal;                         // 大于 127 说明最高位为1，即为负数
    }
    return num;
}
/**
 * 16 进制字符串转无符号整数
 *
 * @param {string} hex 16 进制字符串
 */
export function hexToNumber(hex: string): number {
    return parseInt(hex, 16);
}