const capitalize = require("./capitalize");
const reverse = require("./reverseStr");
const calculator = require("./calculator");
const caesarCipher = require("./caesarCipher");
const analyzeArray = require("./analyzeArray");

test("capitalizes string", () => {
    expect(capitalize("alex")).toBe("ALEX");
});

test("reverses string", () => {
    expect(reverse("alex")).toBe("xela");
});

test("adds", () => {
    expect(calculator.add(3, 3)).toBe(6);
});

test("subtracts", () => {
    expect(calculator.subtract(100, 50)).toBe(50);
});
test("multiplies", () => {
    expect(calculator.multiply(2, 30)).toBe(60);
});

test("divides", () => {
    expect(calculator.divide(49, 7)).toBe(7);
});

test("ciphers", () => {
    expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("analyze array", () => {
    expect(analyzeArray([5, 3, 4])).toStrictEqual({
        average: 4,
        min: 3,
        max: 5,
        length: 3,
    });
});
