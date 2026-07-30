function countChar(str, char) {
  let count = 0;
  for (letter of str) {
    if (char === letter) {
      count++;
    }
  }
  return count;
}

module.exports = countChar;
countChar("absge", "a");

//check if the code looks correct
console.log(countChar("shdhhshd", "h"));
