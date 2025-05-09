function repeat(str, count) {
    // Ensure that count is a non-negative integer
    if (count < 0) {
      throw new Error("Count must be a non-negative integer.");
    }
  
    if (count === 0) {
      return ""; // Return empty string if count is 0
    }
  
    let result = ""; // Initialize an empty string to build the repeated string
  
    // Loop to append the string to the result 'count' times
    for (let i = 0; i < count; i++) {
      result += str;
    }
  
    return result;
  }
  
  module.exports = repeat;
  
