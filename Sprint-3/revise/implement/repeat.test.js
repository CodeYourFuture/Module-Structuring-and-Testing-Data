function repeat(str, count) {
    if (typeof str !== 'string') {
        throw new Error('The first argument must be a string.');
    }
    if (typeof count !== 'number') {
        throw new Error('The second argument must be a number.');
    }

    if (count < 0) {
        throw new Error('Count must be a non-negative integer.');
    }

    if (count === 0) {
        return '';
    }

    if (count === 1) {
        return str;
    }

    return str.repeat(count);
}

test('should repeat the string specified number of times', () => {
    expect(repeat('abc', 3)).toBe('abcabcabc'); // Test for normal repetition
    expect(repeat('test', 2)).toBe('testtest'); // Test for 2 repetitions
});

test('should return the original string when count is 1', () => {
    expect(repeat('abc', 1)).toBe('abc'); // Test for count = 1
});

test('should return an empty string when count is 0', () => {
    expect(repeat('abc', 0)).toBe(''); // Test for count = 0
});

test('should throw an error when count is negative', () => {
    expect(() => repeat('abc', -1)).toThrow('Count must be a non-negative integer'); // Negative count test
});

test('should throw an error if first argument is not a string', () => {
    expect(() => repeat(123, 3)).toThrow('The first argument must be a string'); // Non-string test
});

test('should throw an error if second argument is not a number', () => {
    expect(() => repeat('abc', 'three')).toThrow('The second argument must be a number'); // Non-number test
});

// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.
