
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I think we cannot directly insert value which is 3 as a parameter. We have to declare it as a variable. 

//function square(3) {
//  return num * num;
//}

// =============> write the error message here
// The error message shows SyntaxError: Unexpected number

// =============> explain this error message here
// The error shows SyntaxError as Unexpected number which means the function syntax doesnot expect to input
// any values directly in the parameter. That's why the function doesnot work. 

// Finally, correct the code to fix the problem

// =============> write your new code here
// The correct code: 

function square(num) {
    return num * num;
}
let num = 3;
console.log(square(num));


