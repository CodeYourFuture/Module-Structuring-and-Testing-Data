const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
there are 6 variable declarations in this programe they are in the following lines:

const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;

// b) How many function calls are there?
there is 1 function call in this program and it is in the following line: 

console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

The expression `movieLength % 60` calculates the remainder when `movieLength` is divided by 60. 
In this context, it gives the number of seconds that remain after converting the total seconds into minutes and hours.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
The expression assigned to `totalMinutes` calculates the total number of minutes in `movieLength` 
by subtracting the remaining seconds and dividing by 60.


// e) What do you think the variable result represents? Can you think of a better name for this variable?
variable result represents the formatted remaining movielength time in hours, minutes, and seconds (HH:MM:SS). 

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
yes this code will work for all values of movieLength asa long as it is a non- negative integers.
