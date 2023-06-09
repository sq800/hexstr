import { expect, test } from "vitest";
import { hexToArray, toHex, hexToSignedNumber,hexToNumber } from "./index";

test("测试hexToArray", () => {
    expect(hexToArray("12 3 4")).toEqual([0x12, 0x34]);
    expect(hexToArray("12 3 4")).toEqual([0x12, 0x34]);
    expect(hexToArray(" 1 2 3 4 ")).toEqual([0x12, 0x34]);
    expect(hexToArray("123")).toEqual([0x12, 0x3]);
})
test("测试toHex", () => {
    expect(toHex(0x12)).toBe("12");
    expect(toHex([0x12, 0x34])).toBe("1234");
    expect(toHex([0x12, 0x34, 0xFF])).toBe("1234FF");
    expect(toHex([0x1, 0x34, 0xFF])).toBe("0134FF");
});
test("测试toHex的错误情况", () => {
    expect(() => toHex(0x112)).toThrowError();
    expect(() => toHex([0x1, 0x34, 0x1FF])).toThrowError();
})
test("测试hexToSignedNumber", () => {
    expect(hexToSignedNumber("12")).toBe(0x12);
    expect(hexToSignedNumber("2")).toBe(0x2);
    expect(hexToSignedNumber("FF")).toBe(-1);
    expect(hexToSignedNumber("FFFF")).toBe(-1);
    expect(hexToSignedNumber("F1")).toBe(-15);
})
test("测试hexToNumber", () => {
    expect(hexToNumber("12")).toBe(0x12);
    expect(hexToNumber("2")).toBe(0x2);
    expect(hexToNumber("FF")).toBe(255);
    expect(hexToNumber("FFF")).toBe(4095);
})
