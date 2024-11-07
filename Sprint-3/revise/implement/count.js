function countChar(str, char) {
  let count = 0;
  // Loop through the string and count occurrences of 'char'
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
module.exports = countChar;
