// A set of words can be grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all caps with underscores instead of spaces.

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"

// Another example: "lord of the rings" should be "LORD_OF_THE_RINGS"

// You will need to come up with an appropriate name for the function
// Use the MDN string documentation to help you find a solution
// This might help https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase


//1- methodo that take space add _ ?
//2- methodo find first index of ech word
//3- methodo to tranform string to upercase = toUpperCase()
//4- return the value 



function takeSapcestoUpercase(inputString) {
    
  let takespace = inputString.split(" ");
  let transfStringAgain = takespace.join("_");
  let changeUper = transfStringAgain.toUpperCase();
  return changeUper;
};
   let textExemple = "cat dog rabbit";
console.log(takeSapcestoUpercase(textExemple));

 let textExemple2 = "hello there";
 console.log(takeSapcestoUpercase(textExemple2));
