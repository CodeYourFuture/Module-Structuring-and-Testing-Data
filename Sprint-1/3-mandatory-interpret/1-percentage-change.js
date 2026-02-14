let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")); //error line of code
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," , "")); //fixed


const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/* There are three function calls in this file as shown by the following lines from the code:
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
console.log(`The percentage change is ${percentageChange}`);

replaceAll and log are the functions in the above lines */

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/* The error is coming from the following line inside the replaceAll method that accepts two parameters separated by comma
but in our code there is no comma for the separation and that is the problem
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
we can fix this by simply adding the comma after first parameter value as follows:
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," , "")); */

// c) Identify all the lines that are variable reassignment statements
/* The following two lines are the variable reassignment statements:
carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")); */

// d) Identify all the lines that are variable declarations
/* All the lines that are variable declarations are as follows:
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")); //error line of code
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100; */

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/* This code is replacing all the comma characters with an empty character inside the carPrice String and then converting that String  to a Number
The purpose of doing this is because in the later part of code we are doing some Math calculations on this number 
and, therefore, we can't use String, we need to remove the commas in the String and convert that String into a number