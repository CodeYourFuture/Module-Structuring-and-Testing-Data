function countChar(str, char) {
  const arrayOfChars = Array.from(str);
  let count = 0;
  for (letter of arrayOfChars) {
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
