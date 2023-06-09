/**
 * 16 进制字符串转数字数组
 *
 * @param {string} hexString 待转换的 16 进制字符串
 */
export declare function hexToArray(hexString: string): number[];
/**
 * 数字（数组）转换成 16 进制字符串
 *
 * @param {number|number[]} input 数字（数组）
 */
export declare function toHex(input: number | number[]): string;
/**
 * 数字数组转换成 16 进制字符串
 *
 * @param {number[]} arr 数字数组
 */
export declare function arrayToHex(arr: number[]): string;
/**
 * 数字转换成 16 进制字符串
 *
 * @param {number} num 数字
 */
export declare function numberToHex(num: number): string;
/**
 * 16 进制字符串转成有符号整数
 *
 * @param {string} hex 16进制字符串
 */
export declare function hexToSignedNumber(hex: string): number;
/**
 * 16 进制字符串转无符号整数
 *
 * @param {string} hex 16 进制字符串
 */
export declare function hexToNumber(hex: string): number;
