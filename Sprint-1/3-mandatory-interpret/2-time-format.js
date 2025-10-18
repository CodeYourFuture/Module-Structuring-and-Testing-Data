const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// a) How many variable declarations are there in this program?
// There are six variable declarations: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours, and result.

// b) How many function calls are there?
// There is one function call in this program: console.log(result).

// c) Using documentation, explain what the expression movieLength % 60 represents
// The expression movieLength % 60 uses the modulo (%) operator to find the remainder after dividing movieLength by 60. This gives the number of seconds left over after converting all full minutes from the total seconds.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression (movieLength - remainingSeconds) / 60 converts the total number of seconds (minus any leftover seconds) into full minutes, effectively giving the total number of complete minutes in the movie.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the movie length converted from seconds into hours, minutes, and seconds in the format "hours:minutes:seconds". A better name for this variable would be formattedDuration or timeString for clarity.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// This code works correctly for positive integer values of movieLength because it cleanly divides seconds into hours, minutes, and seconds. However, it will not work properly for negative numbers or non-integer values, and it doesn’t add leading zeros (e.g. it might print 2:5:3 instead of 2:05:03).
