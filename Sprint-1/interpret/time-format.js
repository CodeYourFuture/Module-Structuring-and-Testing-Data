const movieLength = 8784; // length of movie in seconds 8784

const remainingSeconds = movieLength % 60;
console.log(remainingSeconds);

const totalMinutes = (movieLength - remainingSeconds) / 60;
console.log(totalMinutes);

const remainingMinutes = totalMinutes % 60;
console.log(remainingMinutes);


const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

/*
    For the piece of code above, read the code and then answer the following questions

    a) How many variable declarations are there in this program?

        -------- 6 in total
        -------- movieLength - declared as const
        -------- remainingSeconds - declared as const
        -------- totalMinutes - declared as const
        -------- remainingMinutes - declared as const
        -------- totalHours - declared as const
        -------- result - declared as const


    b) How many function calls are there?

        -------- 4 function calls:
        -------- console.log(remainingSeconds);
        -------- console.log(totalMinutes);
        -------- console.log(remainingMinutes);
        -------- console.log(result);

    c) Using documentation, explain what the expression movieLength % 60 represents

        -------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
        -------- Remainder:
        -------- WITH % we can obtain the remainder between the var movieLength % 60; and stored in remainingMinutes

    d) Interpret line 4, what does the expression assigned to totalMinutes mean?

        -------- This line subtracts remainingSeconds from movieLength to remove the leftover seconds. 
            Then, it converts the difference into minutes by dividing the result by 60. 
            This gives the total number of whole minutes in movieLength.

    e) What do you think the variable result represents? Can you think of a better name for this variable?

        ------- Result var represents the total runtime of the movie. While "result" is fine, 
            a name like "movieRunTime", "timeMovie" or "formattedTime" would be more descriptive and improve readability.

    f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

        ------- This code works as expected for the most of positive values of movieLength. 
            However, if a negative value is provided for movieLength, the result will show negative values, 
            which might not make sense in the context of time. For example:
            const movieLength = -4258;
            result: -1:-10:-58

*/