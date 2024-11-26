const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

console.log(last4Digits);

// If cardNumber were a number (not a string), this would raise a TypeError because numbers don't have a slice() method.
// If cardNumber were a number, JavaScript would throw a TypeError because slice() is not a method for numbers.
// Why String Conversion Might Not Always Be Ideal:
// 1-Loss of Numerical Context: After converting to a string, performing arithmetic operations requires converting back to a number.
// 2-Performance Considerations: String manipulation can be less efficient than numerical operations, especially in large-scale data processing.
// 3-Clarity: Maintaining a variable as a number can make the code easier to understand in contexts where numeric operations are expected. ​​
