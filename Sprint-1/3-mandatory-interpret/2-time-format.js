const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// Answer: 6 variables: line 1,3,4,6,7,9, wherever there is const or let word

// b) How many function calls are there?
// Answer: only 1: Console.log

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//Answer: the expression will divide movieLength which is second to 60 and extract the REMAINDER of the operation. The remainder in this case can have a range of values between 0-59s


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//Answer: in line four we are subtracting the remainder of movieLength divided by 60 to make a divisible number by 60, because we want to know how many minutes the movieLength is in minute not second unit and minutes should be integer not float. 


// e) What do you think the variable result represents? Can you think of a better name for this variable?
//  Answer: the length of the movie in the following format: hr:min:sec, movieLength would be an appropriate alternative for this variable, however since we already have a variable with the same name and const type which the value cannot be changed, "remainingDisplayTime" is the best name that reaches my mind.


// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//Answer: Yes I believe it would work for all the values, since we divide the movieLength by 60 one time to get the minutes and two time to get the hours, if we have a 0 second movie the calculation would still run without throwing an error since 0 is not in the denominator and is numerator. 