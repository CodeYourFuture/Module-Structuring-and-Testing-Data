const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);
console.log(`Last 4 digits are ${last4Digits}`)

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//I put my answers into comments because my code was not running when i put them normally because of key words i think.
//The code will not run because the cardNumber string has no quotation marks also there is no console.log
//the error I got is that cardNumber.slice is not a function.