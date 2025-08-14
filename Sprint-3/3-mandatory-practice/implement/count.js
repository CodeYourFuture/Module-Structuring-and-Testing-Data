function countChar(str, char) {
  let count = 0;

  let index = str.indexOf(char);

  while (index !== -1) {
    count++;

    index = str.indexOf(char, index + 1);
  }

  return count;
}
const word = "Mississippi";
const letter = "M";

console.log(
  "The letter " +
    letter +
    " is repeated " +
    countChar(word, letter) +
    " times in the word " +
    word
);

module.exports = countChar;
