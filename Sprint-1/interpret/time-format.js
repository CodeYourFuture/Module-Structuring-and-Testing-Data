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

        -------- console.log(result);

    c) Using documentation, explain what the expression movieLength % 60 represents

        -------- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
        -------- Remainder:
        -------- WITH % we can obtain the remainder between the var movieLength % 60; and stored in remainingMinutes

    d) Interpret line 4, what does the expression assigned to totalMinutes mean?

        -------- This line is taking the leftover remainder in remainingMinutes and leaving just the
            total amount that we can divide perfectly in whole number to see how many minutes we have.

    e) What do you think the variable result represents? Can you think of a better name for this variable?

        ------- Result var represent the total runtime of the movie, the nameVar is fine but we can name it as
            timeMovie for better readability, as it gives future readers a better idea of the variable's purpose.

    f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

        ------- This code works as expected for the most of positive values of movieLength. Just
            when I write negative number in the result will show the negative sign. eg. 
            const movieLength = -4258;
            result: -1:-10:-58
*/