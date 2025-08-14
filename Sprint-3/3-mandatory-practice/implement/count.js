function countChar(strOfCahracters, findcharacter) {
  let count = 0;
  for (let i = 0; i < strOfCahracters.length; i++) {
    if (strOfCahracters[i] === findcharacter) {
      count++;
    }
  }
  return count;
}

// console.log(countChar("aaaaa", "a"));
module.exports = countChar;
