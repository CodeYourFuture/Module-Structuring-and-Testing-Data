function countChar(str, char) {
  if (!char || char.length !== 1) return 0; // ensure char is a single character
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

module.exports = countChar;
