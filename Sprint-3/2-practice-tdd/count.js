function countChar(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {//loop through each character in the string
    if (str[i] === char) {//check if the character matches the target character
      count = count + 1;
    }
  }

  return count;//return the final count
}
module.exports = countChar;