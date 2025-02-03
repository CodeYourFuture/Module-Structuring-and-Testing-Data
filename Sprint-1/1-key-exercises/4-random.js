const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Answer
//math.random generates a random number between a range where min is included and max is excluded. By multiplying we care scaling the range.
//(maximum - minimum + 1)) + minimum this part ensures we cover the whole range
//math.floor will round down the evaluated float number to the nearest integer
