const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// There are 6: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, 
// and result


// b) How many function calls are there?

// There is 1: console.log 


// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// The expression movieLength % 60 calculates the remainder when movieLength is divided by 60.
// For instance if the movieLength were 121, the remainder of this division would be 1.



// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

const totalMinutes = (movieLength - remainingSeconds) / 60;

// This line calculates the length of the movie in whole minutes 


// e) What do you think the variable result represents? Can you think of a better name for this variable?

// "result" represents the result of the calculations, being the total length of the movie 
// transcribed to hours/minutes/seconds. It would have been much clearer to not give the mathematical 
// output as the name but instead the usability of this output, such as "movieLengthHMS" or the clearer 
// but rather lengthy movieLengthHoursMinutesSeconds




// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// Yes, as long as they are positive numbers. They should also be integers. 
// I have tried to give half-seconds and this did not break the code, but the half-second was 
// ignored in the output

