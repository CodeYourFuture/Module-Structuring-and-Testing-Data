const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num)
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
/* 

Here's how the expression works step-by-step:
Note:   Firstly, I explained by my own words how the code will run then 
        I asked chatgpt to make it clear for others to read.

1. (maximum - minimum + 1)
   → (100 - 1 + 1) = 100
   This calculates the size of the range of possible values.

2. Math.random() * 100
   → Math.random() generates a float between 0 (inclusive) and 1 (exclusive).
   → Multiplying it by 100 gives a float between 0 and 99.999...

3. Add minimum (1)
   → This shifts the range from 0–99 → to 1–100.

3. Math.floor(...) rounds the result down to the nearest whole number
   → So we now get an integer between 0 and 99.

Final result: `num` is a **random integer between 1 and 100**, inclusive.
*/