function countChar(stringOfCharacters, findCharacter) {
  let countCharacter = 0;
  for (let i = 0; i < stringOfCharacters.length; i++){
    if (stringOfCharacters.charAt(i) === findCharacter){
      countCharacter += 1;
    } 
  }
  return countCharacter
}


module.exports = countChar;
