// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here: it will throw an error because in the parameter(placeholder)
//                                                                  there is constant value which js does not recognize.

function square(3) {
  return num * num;
}

// =============> write the error message here: the error message SyntaxError: Unexpected number

// =============> explain this error message here: syntax error, meaning it fails before the function even gets defined.
//                                                 JS expects a parameter slot to contain a name (identifier) and gets confused
//                                                 when it sees a raw number sitting there instead.

// Finally, correct the code to fix the problem

// =============> write your new code here: function square(num) {
//                                                return num * num;
//                                           }
