function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

// Test cases

console.log(countChar("aaaaa", "a"));
console.log(countChar("banana", "a"));

console.log(countChar("hello", "z"));
console.log(countChar("world", "W"));

console.log(countChar("", "a"));
console.log(countChar("aaaaa", ""));

module.exports = countChar;
