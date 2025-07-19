// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// i think it gets a error cause the var decimalNumber is declared inside the function and used as the arg of the function. not sure of the error but it should throw a error 
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) { 
  const decimalNumber = 0.5; 
  const percentage = `${decimalNumber * 100}%`; 

  return percentage; 
}

console.log(decimalNumber); 

// =============> write your explanation here
//function declared with arg. takes decimal number
// this is the error, the var decimalNumber is declared inside the function and then used as the arg of the function. this is not allowed in js.
// the decimal number is converted to percentage by multiplying it by 100 and concating a % sign
// returns the percentage
// prints to console the decimal number

// Finally, correct the code to fix the problem
// =============> write your new code here
/* 
  const decimalNumber = 0.5;

  function convertToPercentage(decimalNumber) { 
   const percentage = `${decimalNumber * 100}%`; 

  return percentage; 
}

console.log(convertToPercentage(decimalNumber)); 