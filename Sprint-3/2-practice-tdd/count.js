function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  for (let i = 0; i<stringOfCharacters.length; i++){
    if (stringOfCharacters[i] === findCharacter){
      count++;
    }
  }
  return count;
}
//console.log(countChar("please work for me", "e" )) //output is: 3

module.exports = countChar;

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

assertEquals(countChar("aaaaa", "a" ), 5);
assertEquals(countChar("venue", "b" ), 0);
assertEquals(countChar("", "x" ), 0); 

// try {
//   countChar(12);

//   // This line will not be reached if an error is thrown as expected
//   console.error("Error was not thrown for invalid string");
// } catch (error) {}