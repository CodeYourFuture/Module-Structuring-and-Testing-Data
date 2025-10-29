const 12HourClockTime = "20:53";
// This line of code attempts to declare a constant variable named 12HourClockTime, but it results in a syntax error
const 24hourClockTime = "08:53";

// While testing the code, the following error appeared in console:
// SyntaxError: Invalid or unexpected token

// Why did this error occur? according to the MDN Web Docs: https://developer.mozilla.org/en-US/docs , a "SyntaxError: Invalid or unexpected token" occurs when JavaScript encounters code that doesn't follow proper syntax rules
// In this case, the error happens because JavaScript does not allow variable names to start with numbers. Variable names (also called identifiers) must begin with a letter, underscore (_), or dollar sign ($)

// How to fix the error:
const hour12ClockTime = "20:53";
// These version follow JavaScript naming rules and will execute without errors
