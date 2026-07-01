function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
const str = "aaaaa";
const char = "a";
const count = countChar(str, char);
console.log(countChar("aaaaa", "a"));
console.log(countChar("aaaaa", "b"));

module.exports = countChar;
