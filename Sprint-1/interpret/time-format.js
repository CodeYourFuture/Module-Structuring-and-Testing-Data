const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable

// b) How many function calls are there?
// There are 1 function

// c) Using documentation, explain what the expression movieLength % 60 represents
//The modulo operation (%) calculates the remainder when movieLength is divided by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/*
The variable result represents the total time of the movie in the format of hours:minutes:seconds.
A better name for this variable could be movieTime.
*/
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/*
Yes, the code will work for all values of movieLength.
The code works by calculating the total hours, minutes, and seconds from the total length of the movie in seconds.
*/
