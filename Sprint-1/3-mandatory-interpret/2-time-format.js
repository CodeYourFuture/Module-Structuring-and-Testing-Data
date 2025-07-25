const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations: movieLength, remainingSeconds, 
// totalMinutes, remainingMinutes, totalHours and result.

// b) How many function calls are there?
// There is 1 function call: console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression movieLength % 60 calculates the remainder when movieLength 
// is divided by 60.
// It is used to find the remaining seconds after converting the total 
// movie length from seconds to minutes.
// for instance, if movieLength is 8784 seconds, 
// the expression 8784 % 60 will return 24, 
// because 8784 divided by 60 is 146 with a remainder of 24.
// the expression will return 24, which means there are 24 seconds left after
// converting the total movie length to minutes 

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression assigned to totalMinutes converts the total movie length 
// from seconds to minutes by removing the remaining seconds and dividing by 60.
// For example, if movieLength is 8784 seconds,
// the expression (8784 - 24) / 60 will return 146,
// which means the movie is 146 minutes long.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the total movie length showing in
// "hours, minutes and seconds". 
// A better name could be movieDuration.


// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes, this code will work for all values of movieLength.
// The code can handle any positive integer value for movieLength.
// It will correctly calculate the total hours, minutes, and seconds except
// for negative or decimal values.

