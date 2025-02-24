function countChar(str, char) {
    let count = 0; // start with a count of zero

  // goes through each letter in the string
  for (let i = 0; i < str.length; i++) {
    // if the current letter is the same as the one we're looking for
    if (str[i] === char) {
      count++; // increase the count by one
    }
  }

  return count; // return the final count
}

module.exports = countChar;