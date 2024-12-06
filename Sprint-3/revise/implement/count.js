function countChar(str, char) {
  let numberOfChar = 0;
  for (let i = 0; i < str.length; i++) {
    if (char === str[i]) {
      numberOfChar++;
    }
  }
  console.log(numberOfChar);
}

module.exports = countChar;