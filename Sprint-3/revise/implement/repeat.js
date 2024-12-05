
function repeat(str, count) {
    if (typeof str !== 'string') {
        throw new TypeError('The first argument must be a string.');
    }
    if (typeof count !== 'number' || !Number.isInteger(count)) {
        throw new TypeError('The second argument must be an integer.');
    }

    if (count < 0) {
        throw new Error('Count cannot be negative.');
    }

    if (count === 0) {
        return '';
    }

    return str.repeat(count);
}

// Test cases:

// Case: repeat String
console.log(repeat('abc', 3)); // Output: "abcabcabc"

// Case: handle Count of 1
console.log(repeat('hello', 1)); // Output: "hello"

// Case: Handle Count of 0
console.log(repeat('test', 0)); // Output: ""

// Case: Negative Count
try {
    console.log(repeat('error', -1)); // Should throw an error
} catch (e) {
    console.log(e.message); // Output: "Count cannot be negative."
}


module.exports = repeat;