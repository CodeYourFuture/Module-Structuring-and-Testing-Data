function countChar(stringOfCharacters, findCharacter) {
 let counter=0;
 let index=stringOfCharacters.indexOf(findCharacter);
 while(index!== -1)
 {
  counter++;
 
  index = stringOfCharacters.indexOf(findCharacter,index+1);
 }
 return counter;
}

module.exports = countChar;
function assertFunction(currentOutput,targetOutput)
{
  console.assert(currentOutput===targetOutput,
    `expect ${currentOutput} to equal ${targetOutput}`
  );
}
assertFunction(countChar("Ahmaaa hmaaa",'a'),6);
assertFunction(countChar("Ahmaaa hmaaa",'m'),2 );
assertFunction(countChar("Ahmaaa hmaaa",'b'),0);
assertFunction(countChar("Ahmaaa hmaaa",'A'),1);
assertFunction(countChar("",'A'),0);