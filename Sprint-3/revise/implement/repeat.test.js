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

function repeat(str, count){
    if (str === ""){
        return "";
    } else if (count < 0){
        return "count cant be negative";
    } 
    count = Math.floor(count);
    if (count === 1){
        return str;
    } else if (count > 1) {
        let result = "";
        for (let i = 0; i < count; i++){
         result += str;
       } return result;
    } return "";
}

console.log(repeat("cat", 3));

 test('if the function handles various cases correctly.', () => {
    // Test for an empty string
    expect(repeat("", 3)).toBe("");  // Empty string input, expected output is an empty string

    // Test for negative count
    expect(repeat("hello", -2)).toBe("count cant be negative");  // Negative count, expected error message

    // Test when count is 1 (edge case)
    expect(repeat("hello", 1)).toBe("hello");  // count of 1, expected output is the original string

    // Test for count greater than 1
    expect(repeat("hello", 3)).toBe("hellohellohello");  // Repeat "hello" 3 times
    expect(repeat("abc", 2)).toBe("abcabc");            // Repeat "abc" 2 times

    // Test for count 0 (edge case)
    expect(repeat("hello", 0)).toBe("");  // count of 0, expected output is an empty string

    // Test for count being a large number
    expect(repeat("A", 1000)).toBe("A".repeat(1000));  // Repeat "A" 1000 times

    // Test for string with special characters
    expect(repeat("!@#", 2)).toBe("!@#!@#");  // Repeat special characters string

    // Test for count being a non-integer (e.g., a floating point)
    expect(repeat("abc", 2.5)).toBe("abcabc");  // Count 2.5 should behave as count of 2 (since no rounding is implemented)

    // Test for non-string first parameter (type check)
    expect(repeat(123, 3)).toBe("123123123");  // Repeat a number as string
    expect(repeat(true, 2)).toBe("truetrue");  // Repeat boolean as string
  });

