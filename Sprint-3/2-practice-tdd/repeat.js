function repeat(str, count) {
  // Handle edge cases
  if (count < 0) {
    throw new Error("Count cannot be negative");
  }
  
  if (count === 0) {
    return "";
  }
  
  // Build the repeated string
  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }
  
  return result;
}

module.exports = repeat;
