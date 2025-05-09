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
a)
result is also a variable declaration,  there are six.
b)
There is one function call: console.log(result)

c)
The % symbol is the modulo operator.
   the modulo operator returns the remainder of a division. 
    So, movieLength % 60 calculates the remainder when movieLength is divided 
    by 60.
d)
movieLength - remainingSeconds: This subtracts the remaining seconds
  from the total seconds. 
/ 60:  this division gives you the total number of whole minutes in the movie.

e)
1)The variable result represents the formatted movie length in hours, minutes, and seconds (HH:MM:SS format).

 2)formattedTime or formattedMovieLength.  
 f)

1)The modulo operator and integer division will handle positive integer values correctly.
2) If movieLength is 0, the code will correctly produce "0:0:0".
3)If movieLength is negative, the modulo operator will return a negative 
remainder. While the code might technically run, 
the output will not be a correct