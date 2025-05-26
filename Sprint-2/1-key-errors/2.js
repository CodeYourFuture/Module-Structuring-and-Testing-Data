// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I think there will be a syntax error due to we give the function a parameter which is a number 

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// ReferenceError: num is not defined in line 9

// =============> explain this error message here
// we called num and we did not declare it it yet 

// Finally, correct the code to fix the problem

// =============> write your new code here

function squareNum(number){
    return number * number
}

console.log(squareNum(3))
