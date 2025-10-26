function countChar(stringOfCharacters, findCharacter) {
  let char = 0;
  for(let i = 0;i <= stringOfCharacters.length - findCharacter.length;i++){ 
    if ( findCharacter.length === 0 || stringOfCharacters === 0){
      return 0;
    }
    if(stringOfCharacters.substring(i, i + findCharacter.length ) === findCharacter){
      char++;
    }
  }
  return char
}

module.exports = countChar;

