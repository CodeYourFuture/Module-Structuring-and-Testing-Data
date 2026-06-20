const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//Before running the code, I see .slice() method is applied in this javascript but then I can see this method is used on a number.
//So I expected an error to tell me this method is applied on wrong elements.
//When I run it, "TypeError: cardNumber.slice is not a function" which is different to my expectation.
//I googled it and found this type of error can be triggered by typo or wrong object application and in this case I think it is because the number is wrongly applied.
//I tried to fix it by adding " " double quotation mark on the number to make it a string and print the last4Digits. I got the last 4 digits successfully.
