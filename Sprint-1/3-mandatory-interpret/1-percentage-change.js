let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

/*
There are three function call names, but two functions have been made twice inside another, adding up to five function calls being made overall. 
1. carPrice.replaceAll(",", "")
2. Number(carPrice.replaceAll(",", ""))  this expression contain two, one inside the other
3. priceAfterOneYear.replaceAll(",", "")
4. Number(priceAfterOneYear.replaceAll(",", "")) this expression contains two as well 
5. console.log(`The percentage change is ${percentageChange}`)
*/

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

//I have run the code and got a syntax error on line 5, due to two arguments not being seperated by a comma.

// c) Identify all the lines that are variable reassignment statements

//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// d) Identify all the lines that are variable declarations

//let carPrice = "10,000";
//let priceAfterOneYear = "8,543";
//const priceDifference = carPrice - priceAfterOneYear;
//const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

//Removing all the comma for calculation then convert the string into a number.
