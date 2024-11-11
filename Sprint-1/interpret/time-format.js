const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const formattedMovieDuration = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(formattedMovieDuration);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//There are 6 variable declarations: const movieLength,const remainingSeconds,const totalMinutes,const remainingMinutes,const totalHours


// b) How many function calls are there?
//There is 1 function calls in this program which is console.log(result)


// c) Using documentation, explain what the expression movieLength % 60 represents
//It calculates the remainder when dividing movieLength by 60. 


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//TIT calculates the total number of minutes by subtracting the remaining seconds from the total movie length, 
//and then dividing by 60 to convert the seconds into minutes.


// e) What do you think the variable result represents? Can you think of a better name for this variable?
//The variable result represents the formatted time of the movie in hours:minutes:seconds format. 


// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//The code will work for movie lengths that fit within a single day (i.e., 86400 seconds or less), 
//but it will not handle cases where the movie exceeds 24 hours correctly. 
//For example, if movieLength exceeds 86400 seconds (24 hours), the code would not account for days, and the time calculation could become incorrect. 
//To handle movie lengths over a day, additional logic would be needed to calculate days.