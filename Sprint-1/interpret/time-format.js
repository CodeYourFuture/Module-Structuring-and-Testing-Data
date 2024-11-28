const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// There is 6 variable declaration and all of theme is declared with const.

// b) How many function calls are there?

// One function call and it is console.log().

// c) Using documentation, explain what the expression movieLength % 60 represents

// (%) calculates the remainder of the division which in this case calculates the remainder of the division of movieLength by 60.
// Dividing by 60 allows us to determine how many full minutes and any remaining seconds there are

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// the expression calculates the number of seconds in movieLength after subtracting the leftover seconds (remainingSeconds). It gives the number of seconds that make up whole minutes.
// For example, 8784 - 24 = 8760
// 8760 / 60 = 146 minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// the variable result takes the total hours, remaining minutes, and remaining seconds that calculated in the code, then reproduce a string in the format HH:MM:SS.
// better name for variable result could be movieDuration.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// The current code successfully converts a non-negative integer movie length in seconds to hours, minutes, and seconds.
// and if movieLength get negative number, the code will produce incorrect results, such as negative hours or minutes and also
// if movieLength get non-integer number the code could produce unexpected or inaccurate results of movieLength as movie lengths are typically expressed as whole seconds.
