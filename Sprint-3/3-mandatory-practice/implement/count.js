function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i = i + 1) {
    if (str[i] === char) {
      count = count + 1;
    }
  }
  return count;
}

module.exports = countChar;
