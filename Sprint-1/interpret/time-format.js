const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;
const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const formattedMovieDuration = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(formattedMovieDuration);
/*
// For the piece of code above, read the code and then answer the following questions

a) How many variable declarations are there in this program?
1-const movieLength
2-const remainingSeconds
3-const totalMinutes
4-const remainingMinutes
5-const totalHours
6-const result

b) How many function calls are there?
only 1 : Console.log(result)

c) Using documentation, explain what the expression movieLength % 60 represents

-remainingSeconds =24 => To calculate 8784 mod 60, we divide 8784 by 60 and find the remainder:
                        8784/60=146.4  => 146*60=8760 = 8784-8760=24 Therefore => remainingSeconds =24

-totalMinutes=146  =>  8784-24
                      _________ = 146  Therefore we have 146minutes in Total
                        60

-remainingMinutes= 60 => totalMinutes%60=146%60=26

-const totalHours=2 =>    146-26
                         ________= 2   Therefore we have 2hours in Total
                            60

-Next, we store the totalHours, remainingMinutes, and remainingSeconds in the result variable.
-Then, we log the result to the console, which displays the formatted time.           

d) Interpret line 4, what does the expression assigned to totalMinutes mean?

In line 4, the expression assigned to totalMinutes calculates how many complete 
minutes are in the movie. Since one minute has 60 seconds, we first subtract 
the remainingSeconds (24 seconds) from the movieLength (8784 seconds).
This helps us focus only on the total seconds that make up full minutes. 
Then, we divide that number by 60 to find the total minutes, 
which equals 146 complete minutes. We subtract the remaining seconds to 
make sure we only count the full minutes in the movie.

e) What do you think the variable result represents? Can you think of a better name for this variable?
A better name for this variable could be formattedMovieDuration, as it clearly describes what 
the variable contains and its purpose. This name makes it easier to understand the code at a glance.


 f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
*/
