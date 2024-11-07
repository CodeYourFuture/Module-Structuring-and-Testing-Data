const minimum = 1;
const maximum = 100;

// const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
// console.log(num);


// Math.floor() takes the integer Number
// Math.random() will take a number between 1-100;



// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing



function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

console.log(getRandomArbitrary(minimum, maximum));