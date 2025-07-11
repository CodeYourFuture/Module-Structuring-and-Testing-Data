const movieLength = -3200; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations in this program:
// 1. movieLength
// 2. remainingSeconds
// 3. totalMinutes
// 4. remainingMinutes
// 5. totalHours
// 6. result

// b) How many function calls are there?
// There are no function calls in this program. All operations are performed using arithmetic operators and string interpolation.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// The expression `movieLength % 60` calculates the remainder when `movieLength` is divided by 60.
// This is used to find the number of remaining seconds after converting the total movie length from seconds to minutes.
// It effectively gives the number of seconds that do not fit into complete minutes.
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The variable `result` represents the formatted time of the movie in the format "hours:minutes:seconds".
// A better name for this variable could be `formattedDuration`

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes, I have experimented with the code and it will work for all values of `movieLength` that are non-negative integers.
// It will correctly calculate the hours, minutes, and seconds regardless of the total length of the movie.
// (except for the fact that it doesn't show higher values and lower values such as days or microseconds.)
// However, if `movieLength` is negative, the output will still be in the format "hours:minutes:seconds", but the values will not make sense in the context of time.
//// For example, if `movieLength` is -3200, the output will be "0:-53:-20", which is not a valid representation of time.
// To handle negative values, we could add a check at the beginning of the code to ensure that `movieLength` is non-negative
// and return an error message if it is not.
