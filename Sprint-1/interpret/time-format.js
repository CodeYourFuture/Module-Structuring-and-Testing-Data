const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are six variable declarations in this program.

// b) How many function calls are there?
// There is one function call - console.log()

// c) Using documentation, explain what the expression movieLength % 60 represents
// movieLength % 60 represents the remainingSeconds which is 24 minutes.
 

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//  line 4 calculates the total number of minutes in the movie

// e) What do you think the variable result represents? Can you think of a better name for this variable?
  // The variable  shows how long the movie is in hours, minutes, and seconds. I think "Film length" is better name for this variable

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//The code will work for all non-negative integer values of movieLength, as it accurately converts any length in seconds into hours, minutes, and seconds format. However, if movieLength is a negative value, the calculations will yield nonsensical results (e.g., negative hours or minutes), and if it is a non-integer value, it may not accurately represent a movie length. Thus, while it generally handles valid inputs correctly, it should be validated to ensure it is a non-negative integer for practical use cases.