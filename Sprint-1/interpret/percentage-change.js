let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
The are 5 function calls. 
Lines where a function call is made:
line 4 
line 5 
line 8
line 10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
line 5 has an error. 
I believe that the error occurred because we forgot to include a comma between the quotes in the replace all section. 
To correct this, you must do so, and the answer will be 14.57.

// c) Identify all the lines that are variable reassignment statements
line 4 and line 5. 


// d) Identify all the lines that are variable declarations

lines 1  and 2. 
lines 7 and 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
It takes the string we assigned to the carprice variable removes the commas using replace all and then converts the string using a number function. 
