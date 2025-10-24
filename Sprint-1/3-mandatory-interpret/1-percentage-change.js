let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// five fuction calls, in line 4, number(), and replaceAll(). in line 5, number() and replaceAll(), in line 8, console.log().
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//in line 5, a syntax error because of the missing comma inside the replaceAll method parentheses. we can fix this problem by adding the missing comma.
// c) Identify all the lines that are variable reassignment statements
// in line 4 carPrice variable is reassigned and in line 5 priceAfterONeYear as well.
// d) Identify all the lines that are variable declarations
// four variable declarations in line 1 carPrice variable is declared, in line 2 priceAfterOneYear variable is declared, in line 7 priceDifference variable is declared, and in line 8 percentageChange variable is declared.
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// the purpose of this expression number(carPrice.replaceAll(",","")) is to change a string value that contains commas into a number value by removing the commas first using the replaceAll method and then converting the resulting string into a number using the Number function.