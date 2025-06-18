const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);
// 1. In this exercise, you will need to work out what num represents?
// 2. Try breaking down the expression and using documentation to explain what it means
// 3. It will help to think about the order in which expressions are evaluated
// 4. Try logging the value of num and running the program several times to build an idea of what the program is doing

// 1.`num` represents a random whole number between the minimum and maximum values (inclusive).

// 2. This code generates the number using Math.random() and Math.floor():
//    1. Math.random() gives a decimal between 0 (inclusive) and 1 (exclusive).
//    2. Multiply by (maximum - minimum + 1) to scale it to the full range.
//    3. Math.floor() removes the decimal part and rounds down.
//    4. Add minimum to shift the result into the desired range.

// 3. Order of operations:
//    1. Generate random decimal (Math.random())
//    2. Multiply by range (maximum - minimum + 1)
//    3. Round down to nearest whole number (Math.floor)
//    4. Add minimum to shift result into desired range

// 4. Run this multiple times — you'll see a different number each time between 1 and 100.
