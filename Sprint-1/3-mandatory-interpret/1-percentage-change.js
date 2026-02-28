let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

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
a) In this section of the code, we have function calls  appear 5 time through out the code. Here is each of them on the line of code that
they are call:
  - Number(carPrice.replaceAll(",","")); in line  4 is a function calls because the .replaceALL is being executed
  - Number(priceAfterOneYear.replaceAll(",", "")); in line 5 is also a function call because .replaceAll is being executed.
  - Inside the Number() function the .replaceAll in both line 4 and 5 is also a function call because the the parent function is also
   being executed.
  - the console.log is a function calls
So the total amount of function call in this code is 5

b) The main error for the when the running this line of code if for the missing right parameter after the double quote, so fix this 
just add the coma right after the double quote.

c) There are 2 reassign variable statement at line 4 and line 5.

d)There are 4 total variable declarations in this code:
 - let carPrice = "10,00"; line 1
 - let priceAfterOneYear ="8,543"; line 2
 - const priceDifference = carPrice - priceAfterOneYear; line 7
 - const percentageChange = (priceDifference / carPrice) * 100; line 8

e) The expression Number(carPrice.replaceAll(",","")) are doing 2 main purpose, 
 - The first purpose is to remove the coma from the string number "10000" and "8543".
 - Is the changing the string number to number data type.
*/