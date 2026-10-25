// 1. sumOfArray
function sumOfArray(arr) {
    if (!Array.isArray(arr)) return { error: "Expected an array" };
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// 2. reversedString
function reverseString(str) {
    if (typeof str !== "string") str = String(str);
    return str.split("").reverse().join("");
}

// 3. isPalindrome
function isPalindrome(str) {
    if (typeof str !== "string") str = String(str);
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g,"");
    return cleaned === cleaned.split("").reverse().join("");
}

// 4. purgeDuplicates
function purgeDuplicates(arr) {
    if (!Array.isArray(arr)) return { error: "Expected an array" };
    return [...new Set(arr)];
}

module.exports = { sumOfArray,
    reverseString, isPalindrome,
}