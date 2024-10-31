const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program? 6

// b) How many function calls are there? 1

// c) Using documentation, explain what the expression movieLength % 60 represents
//Answer: The expression movieLength % 60 calculates the remainder of the division of movieLength by 60. This gives the number of seconds left after converting the total movie length into complete minutes. For example, if movieLength is 8784 seconds, 8784 % 60 would yield 24, indicating there are 24 seconds remaining after accounting for full minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//Answer: This calculates the total number of complete minutes in the movie. It does this by subtracting the remaining seconds from the total movie length and then dividing the result by 60. This effectively converts the total movie length in seconds to minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//Answer: The variable result represents the formatted string that indicates the total duration of the movie in the format hours:minutes:seconds. A better name for this variable could be formattedMovieDuration or movieDurationString to make it clearer that it contains a duration in a specific format.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//Answer: The code will work for all non-negative integer values of movieLength, as it accurately converts any length in seconds into hours, minutes, and seconds format. However, if movieLength is a negative value, the calculations will yield nonsensical results (e.g., negative hours or minutes), and if it is a non-integer value, it may not accurately represent a movie length. Thus, while it generally handles valid inputs correctly, it should be validated to ensure it is a non-negative integer for practical use cases.