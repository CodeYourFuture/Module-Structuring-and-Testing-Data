const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

//-----------------------------------------------------------------------------------------------
// a) How many variable declarations are there in this program?

    // There are six variable declarations in the code:
    
    // Line 1 – const movieLength:
    // Stores the total duration of the movie in seconds.
    
    // Line 3 – const remainingSeconds:
    // Calculates the number of seconds remaining after converting to full minutes.
    
    // Line 4 – const totalMinutes:
    // Stores the total number of full minutes, excluding the leftover seconds.
    
    // Line 6 – const remainingMinutes:
    // Calculates the remaining minutes after converting to full hours.
    
    // Line 7 – const totalHours:
    // Stores the total number of full hours in the movie duration.
    
    // Line 9 – const result:
    // Constructs the final time in "HH:MM:SS" format as a string.

//-----------------------------------------------------------------------------------------------
// b) How many function calls are there?

    // There is one function call in the code:
    
    // console.log(result):
    // This function outputs the final formatted time (in "HH:MM:SS" format) to the console.

//-----------------------------------------------------------------------------------------------
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

    // The expression "movieLength % 60" uses the modulo operator, 
    // which is an arithmetic operation that returns the remainder 
    // after division.
    
    // In this context, it helps determine how many seconds are left 
    // after converting the total movie length into full minutes.
    
    // For example:
    // movieLength = 8784 seconds
    // 8784 ÷ 60 = 146 full minutes with a remainder of 24 seconds
    // So, movieLength % 60 = 24
    
    // These 24 seconds are what remain after dividing the movie length 
    // into whole minutes.
    
    // If we subtract the 24 seconds from the total:
    // 8784 - 24 = 8760 seconds
    // Then: 8760 ÷ 60 = 146 full minutes

//-----------------------------------------------------------------------------------------------
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

    // (movieLength - remainingSeconds):
    // This subtracts the "remainingSeconds" (24) from the total "movieLength" (8784 seconds). 
    // The purpose is to remove the leftover seconds, leaving only the number of seconds 
    // that make up complete minutes.
    
    // / 60:
    // This divides the result by 60 (since there are 60 seconds in a minute) 
    // to convert the remaining seconds into full minutes.
    
    // totalMinutes:
    // This represents the total number of whole minutes in the movie, 
    // which in this example is 146.

//-----------------------------------------------------------------------------------------------
// e) What do you think the variable result represents? Can you think of a better name for this variable?

    // The variable `const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;` 
    // represents the length of the movie formatted as hours:minutes:seconds (HH:MM:SS).
    
    // A more descriptive name for this variable could be "movieDurationTime", 
    // as it clearly indicates that the value represents the movie's duration 
    // in a time format.

//-----------------------------------------------------------------------------------------------
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

    // This code will not display properly for movies with a duration of 0 seconds, 
    // as the output would appear as "0:0:0", which is not well-formatted.
    
    // We can fix this by applying the .padStart() method to each time unit 
    // (hours, minutes, and seconds) to ensure they are always displayed 
    // with two digits — for example, "00:00:00".
    
    // We use .padStart() on string values because all the time units 
    // are integers, and this method works on strings.










