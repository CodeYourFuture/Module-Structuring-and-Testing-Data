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

/*
Answer
a)In this program there are 5 variable declarations:
  -const movieLength = 8784; at line 1.
  -const remainingSeconds = movieLength % 60; at line 3.
  -const totalMinutes = (movieLength - remainingSeconds) / 60; at line 4.
  -const remainingMinutes = totalMinutes % 60; at line 6.
  -const totalHours = (totalMinutes - remainingMinutes) / 60; at line 7.

b) There are only 1 function call in this program.
  - console.log(result); at line 10

c)At the line 3 we can see the the expression movieLength % 60, 
what is represent is the reminder value after the division movieLength(in second) value by 60%; 
this is to remind how much left over second left in the movie.

d)In line 4, the the expression that is assigned to totalMinutes 
represent the value after the math operation if movieLength value and remainingSeconds then divine by 60;

e)For the variable result it represent the combine total time length of the movie in hour/minutes/second template, for better name for this variable
I would to rename it to totalMovieLength.

f) After the experimenting with different values of movieLength. As Long as the value in movieLength is a positive integer of second. It will 
correctly produce the correct value in hours/minutes/second format. However for to the other value such as float number, string, negative integer
and non numeric value. They might still print out in the format hours/minutes/second but some type will break code such as if string not a number or coma in a string
number, negative value that don't reflect what this code try to do or decimal number that give incorrect result.
*/