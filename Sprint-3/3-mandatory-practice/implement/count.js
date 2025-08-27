function countChar(stringOfCharacters, findCharacter) {
  // return 5; //This will always return 5, regardless of the inputs. So it’s just a placeholder.
  return stringOfCharacters.split(findCharacter).length - 1;
}

module.exports = countChar;

// console.log(countChar("hello", "l")); // 2
// console.log(countChar("hello world", "o")); // 2
// console.log(countChar("banana", "a")); // 3
// console.log(countChar("mississippi", "i")); // 5
