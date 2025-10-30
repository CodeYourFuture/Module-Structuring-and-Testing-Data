const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(`Random number between ${minimum} and ${maximum}: ${num}`);

console.log(
  "Random number between 0 and 1 after evaluating Math.random() is: ",
  Math.random()
);
console.log(
  "Math.random() * (maximum - minimum + 1) scales the range from 1 to 100 (100 isn't included) for the random number: ",
  Math.random() * (maximum - minimum + 1)
);
console.log(
  "Math.floor(Math.random() * (maximum - minimum + 1)) rounds down the random number: ",
  Math.floor(Math.random() * (maximum - minimum + 1))
);
console.log(
  "(Math.floor(Math.random() * (maximum - minimum + 1)) + minimum)  shifts the range to 1–100 (100 is included): ",
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
);
