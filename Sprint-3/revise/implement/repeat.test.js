function repeat(str, count) {
    // Case 1: If count is negative, throw an error
    if (count < 0) {
        throw new Error("The count must not be a negative number!");
    }

    // Case 2: If count is 0, return an empty string
    if (count === 0) {
        return "";
    }

    // Case 3: If count is 1, return the original string
    if (count === 1) {
        return str;
    }

    // Case 4: If count is a positive number greater than 1, repeat the string
    let text = "";
    for (let i = 0; i < count; i++) {
        text += str;
    }
    return text;
}

// Test cases:

// Case: Repeating string 3 times
console.log(repeat("hello", 3));  // Expected output: "hellohellohello"

// Case: Count of 1 (no repetition)
console.log(repeat("hello", 1));  // Expected output: "hello"

// Case: Count of 0 (empty string)
console.log(repeat("hello", 0));  // Expected output: ""

// Case: Negative count (should throw error)
try {
    console.log(repeat("hello", -3));  // Should throw an error
} catch (e) {
    console.log(e.message);  // Expected: "The count must not be a negative number!"
}

// Case: Test invalid count (greater than 9) — optional condition
console.assert(repeat("hello", 11) === "hellohellohellohellohellohellohellohellohellohellohello", "Test failed: invalid count number");
