function countChar(fullString,findCharacters) {
  let count = 0;
  // both of these if statement is for input validation if the input not a string.
  if( typeof findCharacters !== "string" || typeof fullString !== "string"){
    throw new Error("Invalid input");
  };
  
  if (findCharacters.length !== 1) {
    throw new Error("findCharacters must be a single character");
  }

  for (let i = 0; i < fullString.length; i++){
    if(fullString[i] === findCharacters){
      count++;
    }
  }
  return count;
}

module.exports = countChar;


function assertTest(testInput,testCheck){
 console.assert(
  testInput === testCheck,
  `Expect ${testInput} equal to ${testCheck}`
 );
};

assertTest(countChar("whale fat hat cat","a"),4)
assertTest(countChar("I need to lean more and know more","e"),5)
assertTest(countChar("the city centre currently have a carnival","c"),4)
assertTest(countChar("the cruise ship in in transit to south America","s"),4)
