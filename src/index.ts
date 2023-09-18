/**
 * Convert hexadecimal string to number array
 *
 * @param {string} hexString hexadeciaml string to be converted
 */
export function hexToArray(hexString: string): number[] {
    let hexStr = hexString.replace(/\s/g, "").toUpperCase();
    if (hexStr.length % 2 != 0) {
        hexStr = "0" + hexStr;
    }
    let arr: number[] = [];
    for (let i = 0; i < hexStr.length; i += 2) {
        let item = hexStr.slice(i, i + 2);
        arr.push(parseInt(item, 16));
    }
    return arr;
}

/**
 * Convert number or number array to hexadecimal string
 *
 * @param {number|number[]} input number or number array to be converted
 */
export function toHex(input: number | number[]): string {
    if (Array.isArray(input)) {
        return arrayToHex(input);
    } else {
        return numberToHex(input);
    }
}

/**
 * convert number array to hexadecimal string
 *
 * @param {number[]} arr number array to be converted
 */
export function arrayToHex(arr: number[]): string {
    let hexString = "";
    for (let i = 0; i < arr.length; i++) {
        let hexValue = numberToHex(arr[i]);
        hexString += hexValue;
    }
    return hexString.toUpperCase();
}

/**
 * Convert number to hexadecimal string
 *
 * @param {number} num number to be converted
 */
export function numberToHex(num: number): string {
    let hex = num.toString(16).toUpperCase();
    return hex.length % 2 == 1 ? "0" + hex : hex;
}

/**
 * Convert hexadecimal string to signed number
 *
 * @param {string} hex hexadecimal string to be converted
 */
export function hexToSignedNumber(hex: string): number {
    if (hex.length % 2 != 0) {
        hex = "0" + hex;
    }
    let num = parseInt(hex, 16);
    let maxVal = Math.pow(2, (hex.length / 2) * 8); // 1字节 256
    if (num > maxVal / 2 - 1) {
        // 1字节有符号能表示的最大值：256/2-1=127
        num = num - maxVal; // 大于 127 说明最高位为1，即为负数
    }
    return num;
}
/**
 * Convert hexadecimal string to number
 *
 * @param {string} hex hexadecimal string to be converted
 */
export function hexToNumber(hex: string): number {
    return parseInt(hex, 16);
}
