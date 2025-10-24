function countChar(stringOfCharacters, findCharacter) {
  let counter = 0 ;
  for (let i=0 ;i< stringOfCharacters.length ; i++){
    if (stringOfCharacters.charAt(i)==findCharacter){
      counter ++;
      
    }
    
  }
  return counter;
}
console.log(countChar("aaa","a"));
console.log(countChar("aaba","b"));

module.exports = countChar;

