const 12HourClockTime = "20:53";
const 24hourClockTime = "08:53";

// The error: SyntaxError: Invalid or unexpected token
// This occurs as a variable cannot start with a number (it can include a number)
// Renaming to something like ClockTime12hour would solve this