const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

//6 variable declarations


// b) How many function calls are there?

//One function call - console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

//The % (remainder) operator returns the remainder after dividing by 60. - 8784 % 60  this returns 24, which is the number of seconds left over after converting to whole minutes. 

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// It removes the leftover seconds from movieLength and then divides by 60 to calculate the total whole minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

//formattedTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

//// No because it only works for whole numbers of seconds, but it won't format the time properly if the minutes or seconds are less than 10.