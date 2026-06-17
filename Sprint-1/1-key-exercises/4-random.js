const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num)


 //In this exercise, you will need to work out what num represents?
 //Try breaking down the expression and using documentation to explain what it means
 //It will help to think about the order in which expressions are evaluated
 //Try logging the value of num and running the program several times to build an idea of what the program is doing

/*
Answer

num is a variable that'll hold the output of the expression in line 4, I have run the code several times and I get a
different number each run.
Math.random returns a random decimal number between 0 (inclusive) and 1 (exclusive).
Math.floor rounds the number to the nearest integer.
This expression is evaluated according to parenthesis and operator precedence, so for this expression it will be as follows:
1. (maximum - minimum + 1)
2. Math.random() is called
3. result from Math.random * result from > maximum - minimum + 1
4. Math.floor is then called with (Math.random * result from > maximum - minimum + 1)
5. result from Math.floor + minimum
*/

