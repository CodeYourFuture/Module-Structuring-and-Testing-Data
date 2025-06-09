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
// The comma helps to replace the Number from string to a number and it ommits the comma from the number.
// The 10,000 is replaced by 10000 without a comma.

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

// e) this line of code is replacing the value of 10,000 to 10000 by replacing the number 
// from a string to a number and ommiting the comma in the number.
