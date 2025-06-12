const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
        // There are six variables in the above code

// b) How many function calls are there?
        // Only one function is called which is console.log(result)

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
        /*  
            Firstly when we divide the seconds by 60, we converted them to minutes 
            The expression movieLength % 60 is giving us the remainder value after 
            dividing the 'movieLength' value by 60. So the reminder here is 24 sec
        */  

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
        /*
            const totalMinutes = (movieLength - remainingSeconds) / 60;
            Line 4 is subtract the "remainingSeconds" from 'movieLength',
            then divide the result of this subtraction by 60 to convert it to minutes then 
            assign this value to 'totalMinutes' variable.

        */

// e) What do you think the variable result represents? Can you think of a better name for this variable?
        /*
            const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
            'result' variable represents the duration of the film.
            So I think 'movieDuration' could be a better variable name to use which 
            express the code 
        */

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
        /*
            Yes, this code is working for all value as I assigned 'movieLength' 
            to different seconds value.    
        */
