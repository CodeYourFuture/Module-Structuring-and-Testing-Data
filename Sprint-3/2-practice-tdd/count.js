// function countChar(stringOfCharacters, findCharacter) {
//   return 5
// }
function countChar(stringOfCharacters, findCharacter) {
  let countChar = 0;
  for (let stringNum = 0; stringNum < stringOfCharacters.length; stringNum++) {
    if (findCharacter === stringOfCharacters[stringNum]){
      countChar++;
    }
  }
  return countChar;
}
module.exports = countChar;
