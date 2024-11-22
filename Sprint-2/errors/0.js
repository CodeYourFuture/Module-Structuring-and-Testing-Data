// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let strOut = `${str[0].toUpperCase()}${str.slice(1)}`;
  return strOut;
}

console.log(`Test with normal data: "hello guys" is ${capitalise("hello guys")}`);
console.log(`Test with abnormal data: "h" is ${capitalise("h")}`);
//console.log(`Test with abnormal data: "" is ${capitalise("")}`);
//console.log(`Test with extreme data: 234 is ${capitalise(234)}`);
console.log(`Test with normal data: "hello guys again" is ${capitalise("hello guys again")}`);

/* 
My prediction:
I will give the prediction in the order of theories, 
i.e. what I noticed first, etc. I will only analyze line 7:
let str = `${str[0].toUpperCase()}${str.slice(1)}`;
because there is nothing else to analyze

1. Judging by the code, we should accept the incoming string 
and return the same string, but converting the first character 
of the string to uppercase.

2. The first potential error is if the incoming string is empty 
or one character long, i.e. the minimum length of the incoming string 
should be at least 2, otherwise it will cause a critical error. 
Maybe not critical, I don't know node.JS behavior that well yet

3. We should have an error because we redefine the "let str" 
variable with the same identifier as the parameter of our function. 
If there is no error in this place, then the JS interpreter 
or compiler will surprise me greatly.

To confirm my theories I will modernize the code, but not much. 
To write reliable code I would check the length of the string 
and if it is empty, then return an empty string, if the length 
of the string is 1, then return only the first character 
in uppercase. To save time I will make cosmetic changes 
to confirm my theories and detect all errors if possible, 
if there are others. If the input parameter is a number 
consisting of 2 digits or more, this should not cause errors.
 

Test results:
1. My theory about the string length is partially correct. 
When the string is one character long or an empty string, 
the .slice() method returns an empty string. Therefore, 
it was confirmed only on an empty string and this caused 
a critical error. But this happened because str[0] did not work

2. My theory is that if there is another data type instead 
of a string, I chose a number to test the theory, then an implicit 
type conversion will occur. The theory was not confirmed, 
because I was inattentive str[0] in this case does not perform 
an implicit conversion, so my theory failed and its testing 
caused a critical system error.

Conclusions: for more stable operation of the function, 
it is necessary to convert the input parameter to a string, 
but this will not give a magic pill. If you specify more complex 
types, unpredictable behavior is also possible, which 
we will not check and fix now.
*/