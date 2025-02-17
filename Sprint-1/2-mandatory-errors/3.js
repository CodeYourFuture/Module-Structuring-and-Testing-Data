const cardNumber = `4533787178994213`;
const last4Digits = cardNumber.slice(-4);
console.log(last4Digits)

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

// I think the code should because 0 is the first digit of the card number and if we string slice in negative
// in negative integers it should run backwards
// After running the code it gives the error TypeError: cardNumber.slice is not a function
// It gives this error because the variable cardNumber is a number not a string nor does it store
//  objects within an array.
// and the slice function is a method for strings
// This is what I predict: if we change the number into a string then it should work.
// If not then I will have to do deeper research on why it does not work
