/*Predict and explain first...

//function multiply(a, b) {
 // console.log(a * b);
//}
//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);*/

/*Answer: The multiply function takes two parameters, a and b, and logs their product to the console. It doesn't return any value explicitly, so it implicitly returns undefined.
The second line calls the multiply function within a template literal (${multiply(10, 32)}). This means that whatever multiply(10, 32) returns will be included in the template literal.
Since multiply(10, 32) returns undefined, the template literal will end up logging "The result of multiplying 10 and 32 is undefined" to the console. 
If we want the function to return the result of the multiplication instead, we can modify the multiply function to return a * b:*/
function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

