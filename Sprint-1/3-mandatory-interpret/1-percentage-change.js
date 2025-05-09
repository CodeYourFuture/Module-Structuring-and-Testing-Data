// let carPrice = "10,000";
// let priceAfterOneYear = "8,543";

// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// const priceDifference = carPrice - priceAfterOneYear;
// const percentageChange = (priceDifference / carPrice) * 100;

// console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

//Sam
//Answers to A
//There are 3 function calls in this file :
//1. carPrice = Number(carPrice.replaceAll(",", "")); .replaceAll on line 4
//2. priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")); .replaceAll on line 5
//3. console.log on line 10
//B)
//I ran the code and the issue was on line 5, it is also highlighted in red on VS Code. The error I receive is recorded on line 32 and 33
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
//                                                         ^^^
//When I googled I found out that replaceAll("," "") is incorrect because there should be a comma-separated argument and Number couldn't function properly as it still remained string due to syntax error.
//C)
//Line 4 and 5 are variable reassignment statements
//D)
//Line 1,2,7 and 8 are variable declarations
//E)
//In the expression Number(carPrice.replaceAll(",","")),
// .replaceAll is replacing character/s stored inside parenthesis and double quote
//In this instance the value to be replaced was , which is put inside double quotation "," and seperated by a comma then another value is added inside double quotes that will replace the comma value
//Since there was no value declared to replace, the code in this file has only removed the comma without replacing with new value
//Once the comma is removed, the string value is converted to numeric value by Number constructor.

//Correct Code :

let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}%`);
