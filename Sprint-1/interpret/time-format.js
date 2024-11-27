const movieLength = 9999; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
  //Five

// b) How many function calls are there?
   //one

// c) Using documentation, explain what the expression movieLength % 60 represents
   //movieLength % 60  calculates the remainder ,that found by dividing 8784/60 
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
  //const totalMinutes = (movieLength - remainingSeconds) / 60;
        //movieLength  = 8784
        //remainingSeconds = 24 
             // = (8784-24)/60=8760/60=146
// e) What do you think the variable result represents? Can you think of a better name for this variable?
       //`${totalHours}:${remainingMinutes}:${remainingSeconds}`
       //formats the values of totalHours, remainingMinutes, and remainingSeconds into a time-like string in the format hours:minutes:seconds.
       //durationTime=`${totalHours}:${remainingMinutes}:${remainingSeconds}`
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
  //yes!it works for all values
         //root@acer:~/CYF/Module-Structuring-and-Testing-Data/Sprint-1/interpret# node time-format.js
        // 2:26:24
        // root@acer:~/CYF/Module-Structuring-and-Testing-Data/Sprint-1/interpret# node time-format.js
        // 2:26:22
        // root@acer:~/CYF/Module-Structuring-and-Testing-Data/Sprint-1/interpret# node time-format.js
        // 2:26:0
        // root@acer:~/CYF/Module-Structuring-and-Testing-Data/Sprint-1/interpret# node time-format.js
        // 0:1:0
        // root@acer:~/CYF/Module-Structuring-and-Testing-Data/Sprint-1/interpret# node time-format.js
        // 0:0:20
         // root@acer:~/CYF/Module-Structuring-and-Testing-Data/Sprint-1/interpret# node time-format.js
        // 0:14:59
