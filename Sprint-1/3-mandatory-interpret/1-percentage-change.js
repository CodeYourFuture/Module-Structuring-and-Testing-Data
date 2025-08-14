let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made


        /* 
                1: carPrice.replaceAll(",", "")

                2: Number(...)

                3: priceAfterOneYear.replaceAll(",", "")

                4: Number(...)

                5: console.log(...)

            Total function calls: 5 
        */
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
       /* 
        Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
        Error: Originally there was a missing comma inside replaceAll → SyntaxError
        Fix: Ensure correct syntax: replaceAll(",", "")
        */
// c) Identify all the lines that are variable reassignment statements
        /* 
        Line 4: carPrice = Number(...)

        Line 5: priceAfterOneYear = Number(...)
        */ 
// d) Identify all the lines that are variable declarations
        /* 
        Line 1:let carPrice = "10,000";
        Line 2:let priceAfterOneYear = "8,543";
        Line 7:const priceDifference = carPrice - priceAfterOneYear;
        Line 8:const percentageChange = (priceDifference / carPrice) * 100;

        */ 
// e) Describe what the expression of Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
   
    /* 
    The expression of 
    Number(carPrice.replaceAll(",","")):
-----------------------------------------
        Step 1: carPrice.replaceAll(",", "") → removes all commas → "10,000" → "10000"
        Step 2: Number("10000") → converts string to number → 10000
        Purpose: Allows numeric calculations on string-formatted prices
    */ 


