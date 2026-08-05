//const movieLength = 8784; // length of movie in seconds
//const movieLength = 9893; 
//const movieLength = 223;
//const movieLength = 50;
//const movieLength = 345;
//const movieLength = 600;
//const movieLength = 400;
//const movieLength = 90;
//const movieLength = 189;
function MovieFormatting(num){
    if (num < 10){
      var result =  0 + num.toString();
    }
    else{
        return num.toString();
    }
    return result;
}

const movieLength = 800;
const remainingSeconds = movieLength % 60; 
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;
const result = `${MovieFormatting(totalHours)}:${MovieFormatting(remainingMinutes)}:${MovieFormatting(remainingSeconds)}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//six

// b) How many function calls are there?
// 1 i.e console.log

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// This is a reminder operator. It divides one number by another and gives a reminder.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
/* const totalMinutes = (movieLength - remainingSeconds) / 60 
Firstly it will evaluate bracket i.e (movieLength - remainingSeconds) and then divide the value by 60.
*/
// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The result represents the how long the movie is, in hours, minutes and seconds. It can named a "movieDurationHHMMSS".
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes, the code works for different values of movieLength and does not produce any errors. However, it does not always format 
// the output correctly. If the hours, minutes, or seconds are less than 10(e.g 5, 7), they are displayed as a single 
// digit instead of two digits. The standard way to display a movie duration is 00:00:00, so I created a function that
// adds a leading 0 when a value is less than 10. Otherwise, it returns the value as a string.
// After creating a function, I test my code with multiple values of movieLength and it passed all the test cases.
