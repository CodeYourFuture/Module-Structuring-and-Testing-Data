// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function convert24HoursTimeTo12Hours(time) {
  const hours = Number(time.slice(0, 2)); // Extract hours as a number
  const minutes = time.slice(3); // Extract minutes

  if (hours === 24 || hours === 0) {
    // Midnight cases
    return minutes === "00" ? "12 AM" : `12:${minutes} AM`;
  } else if (hours > 12) {
    // Afternoon and evening cases
    return minutes === "00" ? `${hours - 12} PM` : `${hours - 12}:${minutes} PM`;
  } else if (hours === 12) {
    // Noon cases
    return minutes === "00" ? "12 PM" : `12:${minutes} PM`;
  } else {
    // Morning cases
    return minutes === "00" ? `${hours} AM` : `${hours}:${minutes} AM`;
  }
}

// 1 st
const testOutput = convert24HoursTimeTo12Hours("08:00"); // Renamed variable
const expectedOutput = "8 AM";
console.log(testOutput);
console.assert(testOutput === expectedOutput, `${testOutput} is not equal to ${expectedOutput}`);

// 2nd test
const currentOutput2 = convert24HoursTimeTo12Hours("23:00");
const targetOutput2 = "11 PM";
console.log(currentOutput2);
console.assert(currentOutput2 === targetOutput2, `${currentOutput2} is not equal ${targetOutput2}`);

// 4th test

const currentOutput3 = convert24HoursTimeTo12Hours("14:15");
const targetOutput3 = "2:15 PM";
console.log(currentOutput3);
console.assert(currentOutput3 === targetOutput3, `${currentOutput3} is not equal ${targetOutput3}`);

// 5th test
const currentOutput5 = convert24HoursTimeTo12Hours("00:00");
const targetOutput5 = "12 AM";
console.log(currentOutput5);
console.assert(currentOutput5 === targetOutput5, `${currentOutput5} is not equal ${targetOutput5}`);

//6th test
const currentOutput6 = convert24HoursTimeTo12Hours("12:00");
const targetOutput6 = "12 PM";
console.log(currentOutput6);
console.assert(currentOutput6 === targetOutput6, `${currentOutput6} is not equal ${targetOutput6}`);

// 7th test
const currentOutput7 = convert24HoursTimeTo12Hours("24:00");
const targetOutput7 = "12 AM";
console.log(currentOutput7);
console.assert(currentOutput7 === targetOutput7, `${currentOutput7} is not equal ${targetOutput7}`);