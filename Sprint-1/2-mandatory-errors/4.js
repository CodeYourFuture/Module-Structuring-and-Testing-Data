const hour12ClockTime = "20:53 PM";
const hour24ClockTime = "08:53";
console.log(hour12ClockTime);
console.log(hour24ClockTime);

// The error is “Invalid or unexpected token”. It is probably because a variable cannot start with a number.
// The constant 12 hour format is also not correct as it is missing an AM or PM indicator.
// To resolve the error, we need to start the constant with a letter and add a AM or PM indicator to the constant 12 hour format.
