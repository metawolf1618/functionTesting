const { sumOfArray, reverseString,
    isPalindrome, purgeDuplicates
} = require("./functions");

describe("Function Testing Suite", () => {
    test("sumArray should calculate normal sum and handle bad input", () => {
        expect(sumOfArray([1, 2, 3, 4])).toBe(10);
        expect(sumOfArray([])).toBe(0);
        expect(sumOfArray("not an array")).toHaveProperty("error");
    });

    test("reverseString should reverse text and handle numbers", () => {
        expect(reverseString("hello")).toBe("olleh");

 expect(reverseString(12345)).toBe("54321");  });

 test("isPalindrome should validate palindromes and handle mixed casing", () => {

    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);

    expect(isPalindrome("hello")).toBe(false);
 });

 test("purgeDuplicates should remove duplicate entries", () => {
    expect(purgeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3]);

    expect(purgeDuplicates("invalid")).toHaveProperty("error")
 })
})