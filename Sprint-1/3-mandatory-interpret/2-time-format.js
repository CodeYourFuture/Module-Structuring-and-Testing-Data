const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program. The variable declarations are on the following lines:
// Line 1: const movieLength = 8784;
// Line 3: const remainingSeconds = movieLength % 60;
// Line 4: const totalMinutes = (movieLength - remainingSeconds) / 60;
// Line 6: const remainingMinutes = totalMinutes % 60;
// Line 7: const totalHours = (totalMinutes - remainingMinutes) / 60;
// Line 9: const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;


// b) How many function calls are there?
// There is 1 function call in this program. The function call is made on the following line:
// Line 10: console.log(result);


// c) Using documentation, explain what the expression movieLength % 60 represents
// The expression movieLength % 60 represents the remainder of the division of movieLength by 60. In this case, it calculates the number of seconds remaining after converting the total length of the movie (in seconds) into minutes. The modulo operator (%) is used to find the remainder when one number is divided by another. So, if movieLength is 8784 seconds, movieLength % 60 will give us the number of seconds that do not make up a full minute. 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// The expression assigned to totalMinutes calculates the total number of minutes in the movie length. It does this by first subtracting the remaining seconds (calculated in line 3) from the total movie length (movieLength), which gives us the total number of seconds that can be fully converted into minutes. Then, it divides that result by 60 to convert those seconds into minutes. This gives us the total number of complete minutes in the movie length, excluding any remaining seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable result represents the formatted string that shows the total length of the movie in hours, minutes, and seconds. A better name for this variable could be "formattedMovieLength" or "movieDuration" to more clearly indicate that it holds the duration of the movie in a human-readable format.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
/* The code will work for all non-negative integer values of movieLength, as it correctly calculates the hours, minutes, and seconds for any given length of time in seconds. However, if movieLength is a negative number or a non-integer value, the code may not produce meaningful results. For example, if movieLength is negative, the calculations for remainingSeconds, totalMinutes, and totalHours will not make sense in the context of a movie duration. Additionally, if movieLength is a non-integer (like a float), the calculations may yield unexpected results due to how JavaScript handles floating-point arithmetic. Therefore, it's best to ensure that movieLength is a non-negative integer for this code to work correctly. Also, it works correctly only when the movieleng is less than 24 hours, because the code does not account for days. If the movie length exceeds 24 hours, the totalHours variable will continue to increase without resetting after 24, which may not be the desired behavior for representing time in a standard format. */ 
// if movieLength = 90000 seconds, that 25 hours , the variable result  will be 25:0:0, which is not a standard representation of time.
// leading zeros , the variable result will always output resuls like H:M:S instead of HH:MM:SS, so if the movie length is 1 hour, 5 minutes and 9 seconds, the variable result will be 1:5:9 instead of 01:05:09.