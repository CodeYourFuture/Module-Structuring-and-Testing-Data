// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.

// need to get car price = let fullPrice
//need get priceOneyear= let priceOneyear
// need take the spaces off the both variables
//need check the diference of the prices 
//multiplay the result for 100 to check the percentage 
// return the result with template literals

//function needs to be valid with diferents inputs

// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


// let carPrice = "10,000";
// let priceAfterOneYear = "8,543";

// carPrice = Number(carPrice.replaceAll(",", ""));// 10000
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",","")); //8543

// const priceDifference = carPrice - priceAfterOneYear; //1457
// const percentageChange = (priceDifference / carPrice) * 100; //145700

// console.log(`The percentage change is ${percentageChange}`); //14.57

function toPounds(fullPrice, priceOneyear) {

  fullPrice = Number(fullPrice.replaceAll(",", ""));
 priceOneyear = Number(priceOneyear.replaceAll(",", ""));

  const priceDifference = fullPrice - priceOneyear;
 
  const percentageChange = (priceDifference / fullPrice) * 100;

// console.log(`The percentage change is ${percentageChange}`);
 return percentageChange;
}

console.log (toPounds( "100,000", "98,000"));
