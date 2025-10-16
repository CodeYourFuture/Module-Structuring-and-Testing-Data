function countChar(stringOfCharacters, findCharacter) {
  let char=0;
  for(let i=0;i<stringOfCharacters.length;i++){
    if(stringOfCharacters[i]===findCharacter){
      char++;
    }
  }
  return char
}

module.exports = countChar;
