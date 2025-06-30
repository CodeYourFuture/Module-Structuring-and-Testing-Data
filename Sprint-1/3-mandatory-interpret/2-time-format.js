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
 
// Answer a: there are 6 variable declarations which are const movieLength, const remaininingSeconds, const totalMinutes, const remainingMinutes,
//           cost totalHours and const result.

// Answer b: only one function call which is console.log(result).

// Answer c: it means the number of seconds left after removing all full minutes". so 8784%60=24, So there are 24 seconds remaining after 
//           converting to full minutes.It gives the number of seconds left after dividing total seconds into whole minute.

// Answer d:it calculates the number of full minutes in the total movie length. so 8784-24=8760/60=146 minutes

// Answer e: this builds a string representing the time in HH:MM:SS format, based on the movie length in seconds. The better name can be 
//           formattedTime or timeString.

// Answer e: It will work for most large intergers or large hours but it does not work well for time below 60 seconds like 37 seconds is 
//           0:0:37 which can be considered unformatted. What is more, it does not handle negative numbers and does not pad numbers with zero.





