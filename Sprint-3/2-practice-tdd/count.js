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
countChar("aeioyuyuuiiiiu", "i")
module.exports = countChar;
//push char into a new array and count the lenght on new array return the lenght