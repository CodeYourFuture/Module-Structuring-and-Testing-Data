const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//Answer: 6

// b) How many function calls are there?
//Answer: line 8 console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
//Answer: The modulus operator % returns the remainder after division. Divides movieLength by 60 and returns the remainder, effectively isolating the leftover seconds after removing full minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//answer: The purpose of the expression is to compute the total number of minutes in the movieLength, disregarding any extra seconds. This is useful for further calculations where you might want to break down the movie length into hours, minutes, and seconds.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//Answer: The result variable represents the formatted duration of the movie, expressed as a string in the format HH:MM:SS

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//Answer: will work for most positive integer values of movieLength, representing the duration of a movie in seconds.
//If movieLength is negative (e.g., -3600), the calculations will still run without error, but the results will not make sense in the context of time.
//The code works well for non-negative integer values, accurately converting seconds to the HH:MM:SS format.
//It does not handle negative values appropriately, and this will yield nonsensical outputs.
//It does not validate input types, so using non-integer values could lead to unintended representations.