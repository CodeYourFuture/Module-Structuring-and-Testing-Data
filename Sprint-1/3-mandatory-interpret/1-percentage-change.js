let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/*  -At first, this question confused me .I was going to answer 0.
 But after doing some research, I realized that function definition and function call are two different things, and they have different meanings.
 In the code, there are two function calls on each of the two lines where we convert the prices, and one more in the console.log(...) line.
 So, to run our code, we actually make a total of 5 function calls, which are:
 1. carPrice.replaceAll(",", "")
 2. Number(...)
 3. priceAfterOneYear.replaceAll(",", "")
 4. Number(...)
 5. console.log(...)  
 */

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/*  - SyntaxError: missing ) after argument list   
We  got the error because we missed the comma between the arguments in replaceAll on line 5  
*/

// c) Identify all the lines that are variable reassignment statements
// -  we reassigned the value of the carPrice and priceAfterOneYear  in line 4 and 5

// d) Identify all the lines that are variable declarations
/* let carPrice = "10,000";
let priceAfterOneYear = "8,543"; 
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;
1, 2, 7 and 8 lines are variable declarations 
*/

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/* 
This expression removes all commas from the string carPrice using replaceAll(",", ""), 
then converts the resulting string to a number using Number(). 
This is useful to transform formatted price strings like "10,000" into numeric values for calculations.
*/
