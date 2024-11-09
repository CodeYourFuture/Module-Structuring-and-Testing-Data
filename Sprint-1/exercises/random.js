const minimum = 1;
const maximum = 100;

// const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
// console.log(num);


// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/* Math.floor() takes the integer Number
  Math.random() will take a number between 0 (inclusive) and 1 (no inclusive) eg. (0.345, 0,123)
  Math.random() * (maximum - minimum + 1): this multiply the random decimal number 





// in this example taken from mdn we see the same function being called and will generate a random number between the minimun and maximun

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

console.log(getRandomArbitrary(minimum, maximum));