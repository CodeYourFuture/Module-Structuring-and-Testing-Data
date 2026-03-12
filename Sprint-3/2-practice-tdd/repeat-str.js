// Implement a function repeatStr that repeats a string a given number of times

function repeatStr(str, count) {
  // Negative numbers are not valid
  if (count < 0) {
    throw new Error("Count cannot be negative");
  }

  // Repeat the string count times
  let result = "";

  for (let i = 0; i < count; i++) {
    result += str;
  }

  return result;
}

module.exports = repeatStr;
