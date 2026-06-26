function countChar(stringOfCharacters, findCharacter) {
  let count=0;
 for(let letter of stringOfCharacters)
{if(letter=== findCharacter){
  count= count+1;
}
}
return count;
}

module.exports = countChar;

//For committing//