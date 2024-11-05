let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));// Will be fixed like this

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?


/*
Answer
a) There are 5 function calls.
   Line 4,5, and 11

b) The error comes from line 5 because of missing comma between the comman and empthy string replacing argumentt, to fix this we have ato add comma
like this priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

c)Two variables are reassigned from string value to numeric value in line 4 and 5.

d) Line 1,2,7, and 8

e)It replaces the comma value to empty or to remove the comma value from the carPrice value 10,000 and change to number that helps to make the 
calculation. it changes carPrices string value to numeric value 
*/
