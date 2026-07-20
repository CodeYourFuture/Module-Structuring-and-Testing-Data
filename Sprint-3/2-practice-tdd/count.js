function countChar(stringOfCharacters, findCharacter) {
  if(stringOfCharacters === "" || findCharacter === ""){
    throw new Error("string an char are not given")
  }

  const str = stringOfCharacters.split("")
  let count = 0;
  for(const char of str){
    if(char === findCharacter){
      count++
    }
  }
    return count
}
module.exports = countChar;
