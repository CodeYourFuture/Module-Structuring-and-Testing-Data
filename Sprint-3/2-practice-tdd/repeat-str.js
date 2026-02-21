function repeatStr(str, count) {
  // Reject negative counts - not valid for repetition
  if (count < 0) {
    throw new Error("Count cannot be negative");
  }

  // If count is 0, return empty string immediately
  if (count === 0) {
    return "";
  }

  // For count = 1, just return the original string
  if (count === 1) {
    return str;
  }

  // For count > 1: build the repeated string using a loop
  let result = "";
  for (let i = 0; i < count; i++) {
    result += str;
  }

  return result;
}

module.exports = repeatStr;
