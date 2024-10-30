const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//There are 6 variable declarations in the program: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result

// b) How many function calls are there?
//There are no function calls in this program. The program uses only mathematical operations and string template literals.

// c) Using documentation, explain what the expression movieLength % 60 represents?
//The expression movieLength % 60 calculates the remainder when movieLength (the total length of the movie in seconds) is divided by 60.
// This is used to find the remaining seconds after converting some of the seconds into full minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//The expression (movieLength - remainingSeconds) / 60 in totalMinutes converts the movieLength (in seconds) to minutes by removing 
//the remaining seconds (found by movieLength % 60) and dividing by 60. This gives the total minutes of the movie, excluding the remaining seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//The variable result represents the formatted time of the movie in hours:minutes:seconds. 
//A better name could be formattedTime or movieDurationFormatted to reflect its purpose.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//This code should work for any positive integer value of movieLength since it correctly calculates hours, minutes, and seconds regardless of the total length. 
//However, if movieLength is zero or negative, the formatting might need additional handling to display “0:0:0” or handle invalid durations.
