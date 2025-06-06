const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// ANSWER
// ---------------------------------------------
// the script:
// 1. declares two numbers, minimum and maximum
// then it calculates:
// 2. a random number between 0 - 1
// 3. the range between maximum and minimum
// 4. multiply the random num from #2 to the range in #3 (so a random percentage of the whole range)
// 5. round #4 to integer, no decimals
// 6. add the minimum
// 7. assign this integer to num (which is a random whole number between 1 and 100)
// 8. adding console.log to show num.
