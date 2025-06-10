
// Predict and explain first BEFORE you run any code...
// this function should square any number but instead we're going to get an error
// =============> write your prediction of the error here

/*
In parameter part of function, input should be used as parameter name. We should change input as num to produce square value.
*/
/*
function square(3) {
    return num * num;
}
*/

// =============> write the error message here
/*
[Running] node "c:\Users\hmkav\cyf\Module-Structuring-and-Testing-Data\Sprint-2\1-key-errors\2.js"
c:\Users\hmkav\cyf\Module-Structuring-and-Testing-Data\Sprint-2\1-key-errors\2.js:10
function square(3) {
                ^

SyntaxError: Unexpected number
*/
// =============> explain this error message here
/*
Identifier expected.ts(1003)
when you define a function, the part inside the parentheses ((...)) must be parameter names — not values or numbers.
*/
// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}
console.log(square(3));
