/*
     The old code:
const 12HourClockTime = "20:53";
const 24hourClockTime = "08:53";
console.log(24hourClockTime);*/

// It is giving a syntax error
// The reason is that variable names cannot start with a number

// Updated code:
const hourClockTime12 = "20:53";
const hourClockTime24 = "08:53";
console.log(hourClockTime24, hourClockTime12);
