let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// Two function calls are there in this file. those are
// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// Line 5 is having a Syntax error because of missing ','
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

// c) Identify all the lines that are variable reassignment statements

// Line 4 and 5

// d) Identify all the lines that are variable declarations

// Line 1 ,2 , 7 and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// Number is a function used to convert into number datatype, here carPrice is a string 
// where we are going to remove commas  by replaceAll method and finally converting to number datatype
// so that we can perform the mathematical operation like in Line 7. With string we can't perform this 
// operations so we are coverting to number datatype