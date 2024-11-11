
// Predict and explain first...
// 〰️ This program will throw an error because the function square is defined incorrectly.

// this function should square any number but instead we're going to get an error
// 〰️ The function is written as function square(3), which is incorrect because parameter names cannot be numbers. Parameters should be variable names, not values.
// 〰️ Inside the function, num is used in return num * num;, but num is never defined or passed into the function. This will cause a reference error, as JavaScript won’t know what num refers to.
// 〰️ To fix this, change 3 to a valid parameter name, like num, and then use num in the return statement:

function square(num) {
    return num * num;
}

console.log(square(3)); // 〰️ Outputs "9"


