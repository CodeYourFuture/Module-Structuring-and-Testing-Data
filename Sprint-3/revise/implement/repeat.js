function repeat(str, count) {
  switch (true) {
    case count < 0:
      throw new Error("Count cannot be negative"); // Handle negative count
    case count === 0:
      return ""; // Handle count 0
    case count === 1:
      return str; // Return original string when count is 1
    default:
      return str.repeat(count); // Repeat the string when count is greater than 1
  }
}

module.exports = repeat;
