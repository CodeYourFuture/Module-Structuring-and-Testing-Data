const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

// I thought the issue might be something to do with the number given (-4) but it's actually the fact that cardNumber.slice is not a function.
// Slice is not a function for numbers - it's for strings
// To solve this we can turn the card number into a string by using toString() - this converts the number to a string temporarily rather than changing the card number to a string itself.