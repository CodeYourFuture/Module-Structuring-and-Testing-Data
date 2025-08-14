const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
1) const movieLength = 8784; // length of movie in seconds

2) const remainingSeconds = movieLength % 60;
3) const totalMinutes = (movieLength - remainingSeconds) / 60;

4) const remainingMinutes = totalMinutes % 60;
5) const totalHours = (totalMinutes - remainingMinutes) / 60;

6)const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;

// b) How many function calls are there?
1)console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Ope
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
This line is finding the number of seconds left over after dividing the total movie length by 60 seconds (1 minute).

movieLength is the total time of a movie in seconds.

60 is the number of seconds in a minute.

% is the modulus operator — it gives you the remainder after division.


// e) What do you think the variable result represents? Can you think of a better name for this variable?
It represents the movie length formatted as hours, minutes, and seconds.
✅ A better name would be:
formattedTime
durationString
movieTimeFormatted
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
yes it works for different numbers 