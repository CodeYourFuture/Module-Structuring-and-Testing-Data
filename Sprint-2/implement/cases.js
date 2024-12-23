// A set of words can be grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all caps with underscores instead of spaces.

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"

// Another example: "lord of the rings" should be "LORD_OF_THE_RINGS"

// You will need to come up with an appropriate name for the function
// Use the string documentation to help you find a solution



// ================== Strings in UpperCase =====================

function convertUpperCaseString(str) {
  let UPPER_SNAKE_CASE = "";
//   console.log(typeof str);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      UPPER_SNAKE_CASE += "_";
    } else UPPER_SNAKE_CASE += str[i].toUpperCase();;
  }

  return UPPER_SNAKE_CASE;
}

console.log(convertUpperCaseString("hola there"));

// ================ First letter capitalized  ===================


function firstLetterCapitalized1(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i - 1] === " ") {
          result += str[i].toUpperCase(); 
        } else {
          result += str[i]; 
        }
    }
    return result;
}

console.log(firstLetterCapitalized1("first letter capitalized")); 


// ================ Last letter capitalized  ===================

let quote = 'He said, "It\'s a sunny day!"';

function lastLetterCapitalized(str) {
  let result = ""; 

  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === " " || i === str.length - 1) {
      result += str[i].toUpperCase();
      } else {
      result += str[i];
    }
  }

  return result;
}

console.log(lastLetterCapitalized(`hola there ${quote}`));


