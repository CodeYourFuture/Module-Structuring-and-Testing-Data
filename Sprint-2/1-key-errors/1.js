function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

The terminal shows the syntax error because decimal number has been declared.
because the decimal number is a variable which is not supposed to define in the function, 
but the decimal number has been defined insides the functon, so it will forever return 50 %.
  Also, when we call the fucnton, we should name the function convertToPercentage.



function convertToPercentage(decimalNumber) {

  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));

