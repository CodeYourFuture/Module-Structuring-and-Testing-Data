let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

    // There are 6 function calls in this file:
    // Line 5: carPrice.replaceAll(",", "")
    // Line 5: Number(carPrice.replaceAll(",", ""))
    // Line 6: priceAfterOneYear.replaceAll(",", "")    
    // Line 6: Number(priceAfterOneYear.replaceAll(",", ""))
    // Line 10: console.log(`The percentage change is ${percentageChange}`) this is also 
    // a function call to log the output as string to the console, then call the var percentageChange 


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    
    // The error was line 5, carPrice.replaceAll("," ""); missing the comma between the arguments

// c) Identify all the lines that are variable reassignment statements

    //line 4, line 5, 

// d) Identify all the lines that are variable declarations

    // line 1, line 2, line 7 and line 8


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

    // This expresion will work in the parenthesis first, replacing all commas in the string carPrice
    //  with an empty string, so basically returning the string 10000 instead of "10,000". 
    //  Then the Number() function will convert that string "10000" into a number 10000.
    //  secondly, js can not treat strings with commas as numbers, so we need to remove the commas
    //  now with the number cleaned we can convert this string in number with the method Number().





    

// let carPrice = "10,000";
// let priceAfterOneYear = "8,543";

// carPrice = Number(carPrice.replaceAll(",", ""));
// console.log(carPrice); // the commas are removed and the string is converted to a number

// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// console.log(priceAfterOneYear); // the commas are removed and the string is converted to a number

// const priceDifference = carPrice - priceAfterOneYear;
// console.log(`The price difference is ${priceDifference}`);

// const percentageChange = (priceDifference / carPrice) * 100;
// console.log(`The percentage change is ${percentageChange}`);