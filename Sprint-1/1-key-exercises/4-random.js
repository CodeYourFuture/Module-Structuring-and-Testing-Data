const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// 1st Step Math.random() to generate random number between 0 and 1.
// 2nd Step is (maximum - minimum + 1)
// 3d Step is Math.random() * (maximum - minimum + 1)
// 4th Step is Math.floor(Math.random() * (maximum - minimum + 1))
// 5th Step is Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
// This is about simulating random numbers. Useful for quizzes, games, for anything that needs random choice.
// Math.floor() to round float number to the greatest than or equal integer.
// + minimum in this case 1, to make the random possible choice real one, not 0.
