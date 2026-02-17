const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Ans: 6

// b) How many function calls are there?
// Ans: 1

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

/* Ans: In this expression the operator % is used which will return the remainder when we divide movieLength by 60
        Specifically, in the above code it is used to get the remaining seconds which will be left over after
        converting the movieLength i.e given in seconds into minutes. */

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/* Ans: Here, we are taking out all the remainder or left over seconds from the movieLength seconds
        and then dividing that value by 60 to get the length of movie in minutes. */

// e) What do you think the variable result represents? Can you think of a better name for this variable?
/* Ans: result represents the total length of movie in hours, minutes and seconds. The better name 
        could be "lengthOfMovieInHMS" */
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Ans: Yes, this code will work with all number values of movieLength
