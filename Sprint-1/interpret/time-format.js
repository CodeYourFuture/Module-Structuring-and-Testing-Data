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
movieLength % 60 is used to extract the remaining seconds after accounting for full minutes, which is useful when converting a total time in seconds into a more readable hours:minutes
format

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

gives you the total number of full minutes in the movie.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
movieDuration
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

large number or zero or negetive number can not use in movi length,To handle edge cases like negative values more gracefully, you could add a check at the start of the program to ensure that movieLength is non-negative
if (movieLength < 0) {
    console.log("Invalid movie length. Please provide a positive value.");

}
else {}
