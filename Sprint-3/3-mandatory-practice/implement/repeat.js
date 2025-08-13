// Implement a function repeat
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.
function repeat(str, count) {
    // Validate the count
    if (count < 0) {
        throw new Error("Count must be a non-negative integer");
    }
    
    // Repeat the string count times
    return str.repeat(count);
}

module.exports = repeat;