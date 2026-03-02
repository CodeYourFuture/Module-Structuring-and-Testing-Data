let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// there are 4 function calls - Replace All is called twice and Number is called twice
// if console.log is considered a function call then there are 5 function calls in total 

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// there is a comma missing in line 5 it should be 
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// Replace All requires two arguments which should be separated by a comma, without the comma
// it cannot tell where the first argument ends and the second argument begins

// c) Identify all the lines that are variable reassignment statements
// there are 2 variable reassignment statements
// carPrice is reassigned on line 4 - the original value was declared in the let statement on line 1
// priceAfterOneYear is reassigned on line 5 - the original value was declared in the let statement on line 2

// d) Identify all the lines that are variable declarations
// variable declarations are where the variable is declared for the first time
// This happens in lines 1, 2 with let statements and in lines 7, 8 with const statements

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// it replaces the commas in the numbers such as 20,000 so calculations can be done 
// with commas the numbers are recognised as a string but with spaces they can be recognised as numbers
// calculations cannot be performed on strings so they need to be converted to numbers 
