const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log (num);
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Math.random() : Generates a pseudorandom decimal number.  [0, 1)
// Math.random() * (maximum - minimum + 1) : Scales the random value so its width equals the number of integers from `minimum` to `maximum`. [0, maximum - minimum + 1)                                                   
// Math.floor(Math.random() * (maximum - minimum + 1)) : Floors the scaled value, producing a random integer starting at 0. Integers in [0, maximum - minimum + 1), i.e. {0, 1, ..., maximum - minimum}
// Math.floor(Math.random() * (maximum - minimum + 1)) + minimum` : Shifts the previous result upward by `minimum`, producing a random integer between `minimum` and `maximum`, inclusive. Integers in [minimum, maximum + 1), i.e. {minimum, minimum + 1, ..., maximum}
