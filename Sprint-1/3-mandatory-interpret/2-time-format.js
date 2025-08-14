const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// Answer a: There are 6 variable declarations in this program: movieLength, remainingSeconds,totalMinutes,totalHours,remainingMinutes, and result.
// Answer b: There is only one function call "console,log(result);".
// Answer c: The expression movieLength % 60 uses the modules operator (%) which returns the remainder after dividing movieLength by 60.
// This tells us how many remainder seconds are left after converting the total time into full minutes.
// Answer d: This line calculates the total number of complete minutes in the movie after removing the  leftover seconds. in first subtract the  remaining seconds then divide the rest by 60 to convert seconds by minutes.
// Answer e: result stores the formatted time in hours,minutes,seconds. A better name for this variable formattedTime,durationString,timeInHMS.
// Answer f: yes, it works for all non negative integer values of movieLength
