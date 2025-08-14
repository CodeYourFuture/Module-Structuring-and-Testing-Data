const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/*
We declare a minimum integer of 1 and a maximum integer of 100. We assign them (or store them) to variables named "minimum" and "maximum" respectively, using the assignment operator "=" . "=" is not the same as mathematical equality, you would need to use "==" for that. The "=" operator tells the computer to store the value on the right to the variable on the left.
*/

/* 
A variable called "num" is declared and assigned a value based on a complex expression. This expression uses the Math.floor() function, the Math.random() function, the previously declared "minimum" and "maximum" variables, and the integer 1.
*/

/* JavaScript follows order of operations (the exact order to do math steps when there's more than one thing happening in the same expression), and parentheses always come first in any expressions. Therefore to understand what is happening in the "num" variable we start at the inner most part of the expression.
 */

/* The expression (maximum - minimum + 1) calculates the number of possible values you can select (the range) between two numbers. The key reason to this is that there is no range() function in javascript unlike Python for example. We need to ensure that the computer includes the minimum and maximum values in the range and not just the numbers between the minimum and maximum. For example, here the "minimum" and "maximum" values are 1 and 100 and we want the range to include both ends — not just the numbers in the middle, so this expression ensures that there are actually 100 possible choices (in other words (100-1=99)+1=100). If the minimum and maximum variables were 5 and 75 (there are 70 numbers BETWEEN 5 and 75), to ensure the number 75 is included the expression would be (75-5) + 1 = 71.
 */

/* The Math.random() function is then multiplied by the range (the result of the expression above) to give a random decimal between 0 and the range. This means that if the minimum and maximum were 1 and 100, the result of this expression will be a random decimal between 0 and just under 100. Including +1 in the range ensures that the highest possible result (when floored) is 100 — allowing the random number to include both the minimum and maximum values.
 */

/* A Math.floor() function takes one parameter only, and that parameter must be a number or a valid expression that results in a number. The Math.floor() function rounds a number down to the nearest whole number. For example, Math.floor(6.9) would return 6, and Math.floor(8.2) would return 8. This function always rounds down, even if the decimal is very close to the next whole number. In this case if the result of the expression inside the Math.floor() function was 100.999999 (the maximum in the range) it would return 100.
 */

// Therefore the variable num stores a random integer between 1 and 100, inclusive of both numbers.
console.log(num);
