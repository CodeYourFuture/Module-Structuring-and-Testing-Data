function countChar(stringOfCharacters, findCharacter) {
  let count =0;
  for(let i=0; i<stringOfCharacters.length; i++){
  if(stringOfCharacters[i] === findCharacter){
    count=count+1;}}
    return count;
}
console.log(countChar("banana","a"))//3
module.exports = countChar;
