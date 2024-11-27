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

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

//answers 

// a) there are 6 variable declarations

// b) there is one function, console.log(result); which prints the result.

// c) the expression movieLength % 60, uses the % modular which   returns the remaining of a division. here 8784 is the total movieLength in seconds and 60 is total seconds in one minute, so the total expression is saying how many seconds are remaining after we divide 8784 by 60 which will be 24 seconds. 

// d) line 4 calculating the  the total number of whole minutes in the variable movieLength which is in seconds.

// e)  variable result represents time of the movieLength in hours:minutes:seconds. another name can be movieDuration.

// f) i tried different values and the code works well.