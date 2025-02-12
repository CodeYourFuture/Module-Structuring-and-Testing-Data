const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// movieLength (line 1),remainingSeconds (line 3),totalMinutes (line 4),remainingMinutes (line 6)
//totalHours (line 7),result (line 9)
//Total variable declarations: 6

// b) How many function calls are there?
//it is only one,console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//% returns the remainder after division.
//movieLength % 60 calculates the remainder when movieLength is divided by 60

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//this calculates the total number of minutes in movieLength by first removing the remaining seconds (remainingSeconds) and then dividing by 60.This ensures totalMinutes is a whole number, making further calculations easier.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The result variable represents the formatted time in "HH:MM:SS" format.A better name is:formattedTime
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//This code will work for most values but in some cases like: movieLength < 60 (less than one minute)

//The totalMinutes and totalHours would both be 0, but remainingSeconds would have a value.
//Example: movieLength = 45 → Output: "0:0:45"
//movieLength < 3600 (less than one hour but more than a minute)

//The totalHours would be 0, which might look odd in the final output.
//Example: movieLength = 600 → Output: "0:10:0"
//To fix formatting, we could modify the result string to ensure two-digit formatting:
//like:const result = `${String(totalHours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

