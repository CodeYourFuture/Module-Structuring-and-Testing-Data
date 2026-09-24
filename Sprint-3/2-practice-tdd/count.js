function countChar(stringOfCharacters, findCharacter) {
  const lengthOfStr =  stringOfCharacters.length;
  let  numOfOccurrence = 0;
  for(let i = 0; i< lengthOfStr ; i++){
    if(stringOfCharacters[i] == findCharacter){
      numOfOccurrence = numOfOccurrence +  1;
    }
  }
  return numOfOccurrence;
}

module.exports = countChar;
