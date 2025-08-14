const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

/* 
For the piece of code above, read the code and then answer the following questions

 a) How many variable declarations are there in this program?
    
    
            a) Variable Declarations (Total: 5)
        -----------------------------------
        1. const movieLength
        2. const remainingSeconds
        3. const totalMinutes
        4. const remainingMinutes
        5. const totalHours
        6. const result

So, 6 variable declarations.
    
b) How many function calls are there?
             b) Function Calls (Total: 1)
            ----------------------------
        1. console.log(result)
c) Using documentation, explain what the expression movieLength % 60 represents
  
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

              Explanation of: movieLength % 60
            -----------------------------------
        The `%` operator (modulus) returns the **remainder** after division.

        So: 
        movieLength % 60 → returns the number of seconds remaining 
        after converting to full minutes (e.g., 8784 % 60 = 24 seconds)

d) Interpret line 4, what does the expression assigned to totalMinutes mean?
             Interpretation of totalMinutes
           ---------------------------------
        (movieLength - remainingSeconds) / 60

        This subtracts the leftover seconds (e.g. 24) from the total time in seconds,
        then divides the result by 60 to get **full minutes** only.

e) What do you think the variable result represents? Can you think of a better name for this variable?

            What does the variable `result` represent?
            --------------------------------------------
        It represents the time converted from seconds to the format `HH:MM:SS`.

        A better variable name would be:
        → `formattedTime`or `durationInHHMMSS`

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
            Will this code work for all values of movieLength?
            -----------------------------------------------------
        Yes, the code will work **as long as movieLength is a non-negative number**.

        It correctly converts seconds into hours, minutes, and seconds using division and modulus.

        However:
        - The output is not **zero-padded**, e.g. `1:3:5` instead of `01:03:05`
        - If needed for a timer or digital display, use `.padStart(2, "0")` on each value:

        Example 
        const result = `${String(totalHours).padStart(2, "0")}:${String(remainingMinutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
*/