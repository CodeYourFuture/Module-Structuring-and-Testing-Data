const minimum = 1;
const maximum = 100;

// const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
/* Each time this code runs, num will represent a random integer between 1 and 100 */

// Try breaking down the expression and using documentation to explain what it means
/*

- const minimum is setting the minimum value to 1 and const maximum is setting the maximum value to 100
- Math.random() generates a random decimal number between 0(inclusive) and 1(exclusive) e.g. 0.354 or 0.928
- Math.random() * (maximum - minimum + 1) this multiplication scales the random decimal to a range between 0 and 100 e.g. 0.5 * 100 = 50
- (maximum - minimum + 1) is equal to 100 - 1 + 1 = 100
- Math.floor() is taking the result of the multiplication and rounds it down to the nearest whole number, ensuring that the result is always an integer between 0 and 99 
- The last part where we are adding the minimum to the result shifts the entire range up by 1, creating a range from 1 to 100 instead of the previous 0 to 99

*/

// It will help to think about the order in which expressions are evaluated

/*
ORDER:
1. Math.random()
2. Math.random() * (maximum - minimum + 1)
3. Math.floor(...)
4. Math.floor(...) + minimum 

*/

// Try logging the value of num and running the program several times to build an idea of what the program is doing

// example

for (let i = 0; i < 10; i++) {
  const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  console.log(num);
}
