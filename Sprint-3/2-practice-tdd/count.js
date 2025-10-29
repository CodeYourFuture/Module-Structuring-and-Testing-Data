function countChar(stringOfCharacters, findCharacter) {
let total = 0;
   for (let i=0; i < stringOfCharacters.length; i++){
    if (findCharacter == stringOfCharacters[i]){
      total++;
    }
   }
   return total; 
}

module.exports = countChar;
