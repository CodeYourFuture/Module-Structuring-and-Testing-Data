// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

  /*  
  we are creating a variable with (let = nameVariable) but the same time we can not assing
  the value in the same line.
  instead we should call directly the (str = valueAssigned) and with this will Worker.
*/


// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }



/*================== fixed =======================*/

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("alejandra"));


/*
  In this function we are taking a parameter the string "alejadra" this
  entry in the function and assigned in the str = takin the firs character[0].toUpperCase()
  and using the function upper... to convert this in capital letter.
  but we still need the rest of the string and we use the interpolation to concatenate 
  the rest calling the string from the position 1 with  str.slice(1).
*/