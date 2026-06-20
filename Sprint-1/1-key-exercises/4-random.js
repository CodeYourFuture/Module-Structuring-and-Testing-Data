const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//step 1: Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).so it can be any number from 0 up to but not including 1.e.g 0.5, 0.75, 0.25, 0.1, 0.9, etc. and not 1.0.
//step 2: (maximum - minimum + 1) calculates the range of numbers we want to generate. In this case, it calculates the difference between the maximum and minimum values (100 - 1 = 99) and adds 1 to include both endpoints of the range. So, it becomes 100.i.e how many numbers are there from 1 to 100 inclusive.e.g 1,2,3,4,5,6,7,8,9,10,...100. so the range is 100.
//step 3: Math.random() * (maximum - minimum + 1) multiplies the random decimal number generated in step 1 by the range calculated in step 2. This scales the random number to be within the desired range. So, it can be any number from 0 up to but not including 100.e.g 0, 50, 75, 25, 10, 90, etc. and not 100.
//step 4: Math.floor(...) rounds down the result of step 3 to the nearest whole number. This ensures that we get an integer value. so it can be any whole number from 0 up to but not including 100.e.g 0, 50, 75, 25, 10, 90, etc. and not 100.
//step 5: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum adds the minimum value to the result of step 4. This shifts the range of numbers to start from the minimum value. So, it can be any whole number from 1 up to and including 100.e.g 1, 50, 75, 25, 10, 90, etc. and not 0 or 100.

