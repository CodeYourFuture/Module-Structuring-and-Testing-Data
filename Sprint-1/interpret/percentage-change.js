let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made//there are four function calls in this code
//two calls to the replaceAll function.//two calls to the  Number function.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//why?The error likely occurs because carPrice and priceAfterOneYear are initially strings that contain commas (e.g., "10,000"). 
//When we try to perform mathematical operations, JavaScript cannot process strings with commas as numbers, 
//which leads to an error.
//how:To fix the error, we use replaceAll(",", "") to remove the commas from the strings, and then Number(...) to convert the cleaned strings into numbers. 
//This way, the variables carPrice and priceAfterOneYear can be used in calculations without errors

// c) Identify all the lines that are variable reassignment statements
//carPrice = Number(carPrice.replaceAll(",", ""));
//In this line, the value of carPrice is reassigned, converting it to a number without commas


// d) Identify all the lines that are variable declarations
//let carPrice = "10,000";//This line declares the variable carPrice and assigns it a string value "10,000".
//This line declares the variable priceAfterOneYear and assigns it a string value "8,543".
//const priceDifference = carPrice - priceAfterOneYear;//This line declares the constant variable priceDifference and assigns it the result of subtracting priceAfterOneYear from carPrice.
//const percentageChange = (priceDifference / carPrice) * 100;//This line declares the constant variable percentageChange and assigns it the result of calculating the percentage change.




// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//The expression Number(carPrice.replaceAll(",", "")) does two things:\
//1.carPrice.replaceAll(",", ""): This part removes all commas from the carPrice string. So, if carPrice was "10,000", it becomes "10000".
//2.Number(...): This converts the modified string (with no commas) into a number format, so "10000" becomes the numeric value 10000.
//The purpose of this expression is to take a price value that might contain commas as a string, remove those commas, and convert it into a numeric value for calculations.