let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

    // There are 5 function calls

    // Line 4 - carPrice = Number(carPrice.replaceAll(",", ""));
    //     carPrice.replaceAll()
    //     Number()

    // Line 5 - priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
    //     priceAfterOneYear.replaceAll()
    //     NUmber() 

    // Line 10 - 
    //     console.log()


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

    // There is a syntax error; a comma is missing in line 5. There are two strings stuck together without a separator, so the comma will separate the two arguments.

// c) Identify all the lines that are variable reassignment statements

    // Line 4 - carPrice  
    // Line 5 - priceAfterOneYear

// d) Identify all the lines that are variable declarations

    // Line 1 - let   (let carPrice = "10,000";)
    // Line 2 - let    (let priceAfterOneYear = "8,543";)
    // Line 7 - const    (const priceDifference = carPrice - priceAfterOneYear;)
    // Line 8 - const    (const percentageChange = (priceDifference / carPrice) * 100;)

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    
    // When the function is called, the value is stored as a string with commas. For example, the car price will be "10,000" (with a comma).
    // JavaScript does not recognise a number with a comma in it, so it cannot perform numeric operations on such strings.
    // The .replaceAll(",", "") function removes all commas (",") and replaces them with nothing (""), effectively deleting them.
    // So "1,000" becomes "1000", a string without commas.
    // The outer Number() function then converts the string "1000" into the number 1000, so it can be used in mathematical calculations.
