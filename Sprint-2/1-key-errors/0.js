//  =============> Prediction <=============
// I think the code will work as expected. For example, if capitalise("andora")
// is run, it should return "Andora".

//  =============> Actual Results <=============

// The code did not run successfully due to a syntax error. Since the variable
// str was already declared when in the capitalise function input, it cannot
// be declared again as was done on line 6.

//  =============> Corrected Script <=============
function capitalise(str) {
  if (str === "") {
    return "";
  }

  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.assert(
  capitalise("andora") === "Andora",
  `current output: ${capitalise("andora")}, expected output: Andora`
);
