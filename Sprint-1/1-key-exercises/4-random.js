const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


//'num' represents a variable that stores a randomly generated floating point number rounded down to the nearest integer using Math.floor then multiplied by the range of numbers (100 - 1 + 1) + 1
 
// --------------------Breaking down the expression step by step:
//1) Random floating number is generated--> Math.random() = 0.17676928484874743
//2) 'maximum' - 'minimum' (100 - 1 = 99) + 'minimum' (1) = 100  
//3) Next this is multiplied by the random floating point number (0.17676928484874743) * 100 = 17.676928484874743
//4) The result is then rounded down to the nearest integer using Math.floor(17.676928484874743) = 17
//5) Finally, the minimum value (1) is added to the result = 18

// This means that 'num' will always be a random integer between 1 and 100.

// --------------------Documenting the expression:
// > Math.random() = 56.17632138823097
// > Math.random() * maximum - minimum + 1
// >Math.floor(56.17632138823097) + minimum = 57

// > Math.random() = 63.16182500213006
// > Math.random() * maximum - minimum + 1
// > Math.floor(63.16182500213006) + minimum = 64

// > Math.random() = 25.167449255574148
// > Math.random()* maximum - minimum + 1
// > Math.floor(25.167449255574148) + minimum = 26

// --------------------Function to round random float:
function roundRandomFloat() {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

console.log(`The rounded random number is: ${num}`);


//--------------------------------NOTES:
// The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number-->Math.floor(x)
// The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1-->Math.random()