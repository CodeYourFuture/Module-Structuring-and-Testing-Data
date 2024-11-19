const movieLength = 8784; // length of movie in seconds
console.log('movieLength:', movieLength);

const remainingSeconds = movieLength % 60;
console.log('remainingSeconds:', remainingSeconds);

const totalMinutes = (movieLength - remainingSeconds) / 60;
console.log('totalMinutes:', totalMinutes);

const remainingMinutes = totalMinutes % 60;
console.log('remainingMinutes:', remainingMinutes);

const totalHours = (totalMinutes - remainingMinutes) / 60;
console.log('totalHours:', totalHours);

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 5
// b) How many function calls are there?
// 1 - console.log
// c) Using documentation, explain what the expression movieLength % 60 represents
// The modulus operator returns the remainder of the division of movieLength by 60.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// totalMinutes is the quotient of the division of movieLength by 60.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// result represents the time format of the movie length in hours, minutes and seconds. Maybe we can use "HHMMSS" instead.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes, the code will work for all values of movieLength.
