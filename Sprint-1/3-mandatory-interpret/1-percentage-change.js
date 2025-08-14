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

//a: There are three function calls, which are: Number(...), replaceAll(...) and console.log(...)
//   Function call lines: 1. carPrice = Number(carPrice.replaceAll(",", ""));
//                        2. priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
//                        3. console.log(`The percentage change is ${percentageChange}`);

//b: priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")) has an error,SyntaxError: Unexpected string
//    missing a comma between the arguments of replaceAll.
//    correct is: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

// c: two reassignment statements: 1.carPrice = Number(carPrice.replaceAll(",", ""));
//                               2.priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d: four variable declarations(using let or cost to declare new variables):
//    1. let carPrice = "10,000";
//    2. let priceAfterOneYear = "8,543";
//    3. const priceDifference = carPrice - priceAfterOneYear;
//    4.const percentageChange = (priceDifference / carPrice) * 100;

//e:   1.carPrice is a string like "10,000"
//     2.replaceAll(",", "") removes commas → becomes "10000"
//     3.Number(...) converts the string "10000" into the number 10000
//     The purpose is to convert a currency string with commas (e.g., "10,000") into a usable number (10000) for math calculations.









