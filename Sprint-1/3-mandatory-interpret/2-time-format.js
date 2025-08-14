const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
6

// b) How many function calls are there?
1

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
So it is a remainder operator it gives the remaining value after 2 numbers are divided, here the values are always
divided by 60 hence "% 60"

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
The length of the movie previously declared in line 1 will be subtracted by the remaining totalMinutes, that value
will now be divided by 60

// e) What do you think the variable result represents? Can you think of a better name for this variable?
the results represent the exact time a movie lasts in Hours, minutes and seconds respectively. Altenatively i would
call the variable "Total length of a movie"
    
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
The code does not work for all values I think it is because movieLength is declared as a constant therefore it cannot
be reassigned another value