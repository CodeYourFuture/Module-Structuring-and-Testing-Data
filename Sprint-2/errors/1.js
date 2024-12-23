// Predict and explain first...

/* 

  Why will an error occur when this program runs? 
  Try playing computer with the example to work out what is going on

  1. The function won't run because we are not invoking the function,
  2. we have been declared one variable with const and this can not reassigned after, const decimalNumber also has a fixed value
  3. To work efficiently we should assign the parameter =+ inside the function and declare the var decimalNumber
  4. we call the function correctly with its respective argument

    function convertToPercentage(decimalNumber) {
      const decimalNumber = 0.5;
      const percentage = `${decimalNumber * 100}%`;

      return percentage;
    }

    console.log(decimalNumber);
*/


/*================== fixed =======================*/

function convertToPercentage(num) {
  const decimalNumber = num;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(.2)); //20%


