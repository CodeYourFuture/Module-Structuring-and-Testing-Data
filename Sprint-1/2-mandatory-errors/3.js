const cardNumber = "4533787178994213";
const last4Digits = cardNumber.slice(-4);
    console.log(last4Digits);
// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
    // i predict that the code doesn't work its because of two things, first i thought its case sensitive things 
    // the second one is the type of variable, i thought the slice method is only for string type variable.

// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
        /*
    I run the code and it gives me an error that says "TypeError: cardNumber.slice is not a function".
    so i checked the type of cardNumber using typeof operator and it returns number.
    */
// Then try updating the expression last4Digits is assigned to, in order to get the correct value
