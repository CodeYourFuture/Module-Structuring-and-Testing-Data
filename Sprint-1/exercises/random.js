const minimum = 1;
const maximum = 10;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
/*
 -In this exercise, you will need to work out what num represents?

*********Answer:**********

 The num variable returns a random integer between 1 and 100, including both 1 and 100.

-----------------------------------------------------------------------------------

-Try breaking down the expression and using documentation to explain what it means

*********Answer:**********

--Math.random():This function gives us a random number between 0 and 1. return 0 but will never return 1

--maximum - minimum + 1:This calculates the range of numbers we want to generate.
it calculates 100 - 1 + 1, which equals 100. This means we want to generate numbers from 0 to 99.

--Math.random() * (maximum - minimum + 1):
This multiplies the random number (between 0 and 1) by 100, giving us a number between 0 and just under 100.

--Math.floor():This function rounds down the result of the multiplication to the nearest whole number.
--So, if Math.random() returned 0.75, the result of Math.random() * 100 would be 75, 
and Math.floor(75) would still be 75. If it returned 0.99, it would give 99 after flooring.

--Adding minimum:Finally, we add minimum (which is 1) to the result of Math.floor().
This shifts the range from 0-99 to 1-100.

*Final Result
The complete expression generates a random integer between 1 and 100, including both 1 and 100.
-----------------------------------------------------------------------------------

-It will help to think about the order in which expressions are evaluated

*********Answer:**********

1-maximum - minimum + 1
2-Math.random()
3-Math.random() * (maximum - minimum + 1)
4-Math.floor(...)
5-... + minimum
-----------------------------------------------------------------------------------
 -Try logging the value of num and running the program several times to build an idea of what the program is doing

 */

const random = Math.random() * (maximum - minimum + 1) + minimum;

console.log(random);
console.log(Math.floor(random));
