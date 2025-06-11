let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

//-----------------------------------------------------------------------------------------------

// a) How many function calls are there in this file? Write down all the lines where a function call is made

//   There are 5 function calls:

//	•	Line 4 — carPrice = Number(carPrice.replaceAll(",", ""));
//	•	carPrice.replaceAll()
//	•	Number()

//	•	Line 5 — priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
//	•	priceAfterOneYear.replaceAll()
//	•	Number()

//	•	Line 10 — console.log()

//-----------------------------------------------------------------------------------------------
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

//    There is a syntax error on line 5. 
//    The two strings inside the replaceAll method are missing a comma separator, causing them to be concatenated incorrectly. 
//    Adding the missing comma between the two arguments will fix the problem.

//-----------------------------------------------------------------------------------------------

// c) Identify all the lines that are variable reassignment statements

//    •	Line 4 — reassignment of carPrice
//    •	Line 5 — reassignment of priceAfterOneYear

//-----------------------------------------------------------------------------------------------

// d) Identify all the lines that are variable declarations

    // Line 1 - let   (let carPrice = "10,000";)
    // Line 2 - let    (let priceAfterOneYear = "8,543";)
    // Line 7 - const    (const priceDifference = carPrice - priceAfterOneYear;)
    // Line 8 - const    (const percentageChange = (priceDifference / carPrice) * 100;)

//-----------------------------------------------------------------------------------------------
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    
//    The value of carPrice is initially a string that includes commas, for example "10,000". 
//    JavaScript cannot perform numerical calculations on strings containing commas, as it does not recognise them as valid numbers.
//    The method .replaceAll(",", "") removes all commas from the string, turning "10,000" into "10000".
//    Finally, the Number() function converts the resulting string "10000" into the numeric value 10000, which allows mathematical operations to be performed on it.
