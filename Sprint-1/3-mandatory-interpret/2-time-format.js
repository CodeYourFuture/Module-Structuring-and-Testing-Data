const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// there are 6 variable declaration are there,anything that starts with let and const considered as a variable declaration

// b) How many function calls are there?

// there is only one function call, which is console.log(). a function has to be like this functionName()

// c) Using documentation, explain what the expression movieLength % 60 represents

// The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.
// movieLength % 60 means How many seconds are left after dividing movieLength by 60?"
// movieLength % 60 gives you the remaining seconds after converting as many seconds as possible into whole minutes.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// it means take the number of full seconds that can be evenly split into minutes, and convert that to minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// it represents a time format like this HH:MM:SS and a better name that suits the variable is timeFormat

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes, the code will work for all non-negative integers,i tried using different values starting from 0,1 amd going upto million and the code works
// The code correctly takes a number of seconds (movieLength) and converts it into a time format: hours, minutes, and seconds — then displays it as a string like H:M:S."
