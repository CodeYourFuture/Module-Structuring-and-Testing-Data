function repeat(times = 1) {
    return "hello".repeat(times); // Repeat the string "hello" the specified number of times
    
}

// Given a number times,
// When the repeat function is called with this number,
// Then it should return the string "hello" repeated that many times.
// For example, if times is 3, it should return "hellohellohello".
// If times is 0, it should return an empty string.
// If times is negative, it should return an empty string as well. 
// If times is not provided, it should default to 1, returning "hello".
console.log(repeat(3)); // "hellohellohello"

module.exports = repeat;