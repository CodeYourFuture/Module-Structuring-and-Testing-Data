let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

//Answers:

// a) There are five function calls in this file they are as follow:
// In line 10 console.log(`The percentage change is ${percentageChange}`);
//  ^^ This function prints out the output of the percentage difference in car price.
// In line 4 Number(carPrice.replaceAll(",", ""));
// In line 5 Number(priceAfterOneYear.replaceAll("," "");
// The Number function was called  twice.
//In line 4 carPrice.replaceAll(",", ""))
// In line 5 priceAfterOneYear.replaceAll("," ""))
// ^^ The replaceAll function is called twice.

// b) I ran the code in the terminal and it appears that there is error in line 5 a comma is missing.
// The output of the code is NaN. To fix the error from Number(PriceAfterOneYear.replaceAll("," "")); 
// a comma needs to be added in the code and it should be like this priceAfterOneYear.replaceAll(",", ""));
// There is a syntax error in line 5 because a comma is missing between the two arguments in .replaceAll("," "").
// To fix the error the comma should be added between the two arguments like that:
//  replaceAll(",", "").
//This argument "," in JavaScript is  used to replace all commas string into an empty string "".
// Then convert the string from 10,000 to 10000 and 8,543 to 8543 into a number using the Number function.


// c) The variable reassignment are in line 4 and 5 
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear =Number(priceAfterOneYear.replaceAll("," ""));
// these two lines replace the value of the car price from 10,000 to 10000 and 8,543 to 8543

// d) There are 4 lines where there are variable declaration:
let carPrice = "10,000";
// let function declares that carPrice is  in the value of 10,000
let priceAfterOneYear = "8,543";
// let function here declares that priceAfterOneYear is in the value of 8,543

const priceDifference = carPrice - priceAfterOneYear;
// const declares the constant priceDifference
const percentageChange = (priceDifference / carPrice) * 100;
// const declares the constant percentageChange.

// e) This line of code transforms the string "10,000" by removing the comma (,) using .replaceAll(",", ""), 
// resulting in "10000", and then converts that string into a number with Number(). 
// This helps to perform numerical operations on values that were originally formatted as strings.
//
