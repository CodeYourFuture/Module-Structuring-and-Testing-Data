let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/* There are 5 function calls in this code snippet.
1) carPrice = Number(carPrice.replaceAll(",", "")); --Number(...) & replaceAll(",", "") in this line
2) priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")); --Number(...) & replaceAll("," "") in this line as well.
3) console.log(`The percentage change is ${percentageChange}`); 
*/

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/* The error shown says ) missing after arguements in the expression of priceAfterOneYear. However when I looked into it carefully, the comma was missing between the arguments, not the ). I also used debugger in vscode and simply pointed out the problem by as on the debug console suggested.
 */

// c) Identify all the lines that are variable reassignment statements
/* carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
*/

// d) Identify all the lines that are variable declarations
/* let carPrice = "10,000";
let priceAfterOneYear = "8,543";
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;
*/

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// This expression is coverting the carPrice value by getting rid of the comma in the number and joining the number together. 10,000 ----> 10000
