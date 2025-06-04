// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

// function formatAs12HourClock(time) {
//   const hours = Number(time.slice(0, 2));
//   if (hours > 12) {
//     return `${hours - 12}:00 pm`;
//   }
//   return `${time} am`;
// }

/*
The code above only handles a few cases of times and has several bugs according to the initial results of the test cases. For example it appears to only handle times on the hour with No minutes, it doesn't handle the midnight or noon times as expected, it always adds "am for times greater than 12 which is incorrect for noon and afterwards"
*/

function formatAs12HourClock(time) {
  /*
  The !time condition checks for 'falsy' values such as null, undefined, "", 0, NaN, false.
  The typeof time !== "string" condition ensures the input is actually a string in the first place.
  */
  if (!time || typeof time !== "string") {
    return "Invalid time input";
  }
  /*
  Next, split the input string into the expected hour and minute parts "HH:MM" and store them to the variables names splitHours and splitMinutes for reliability, before we convert to a number, i.e if the input was 1:30 and we relied on the slice(0, 2) method it would give us "1:30", the format would be H:MM which breaks the slice logic.
  */
  const [splitHours, splitMinutes] = time.split(":");

  /* 
  The variable hours( will always be two digits as it pads with "0" if less than 2 characters and then converts to a number in order to do some numeric comparisons later (like checking for cases where it is midnight, noon, etc)
  */
  const hours = Number(splitHours.padStart(2, "0"));

  /*
  Checks if there is a minutes part to the input (for example some inputs may be just the hours only and miss the minutes or minutes may only be a single digit) and if so, pads the minutes to 2 digits from the left(e.g no minutes inputted becomes "00" and single minutes inputted such as "5", becomes "05")
  */
  const minutes = splitMinutes ? splitMinutes.padStart(2, "0") : "00";

  // Next we need to implement the conversion logic.
  // Handle invalid hours and minutes
  if (
    isNaN(hours) || //hours is in an invalid format eg "ab:25"
    isNaN(Number(minutes)) || //minutes is in an invalid format eg "14:xy"
    hours < 0 || // negative hours don't exist in our 24 hour clock system
    hours > 23 || //hours greater than 23 don't exist in our 24 hour clock system
    Number(minutes) < 0 || //negative minutes don't exist in our 24 hour clock system
    Number(minutes) > 59 //minutes greater than 59 don't exist in our 24 hour clock
  ) {
    return "Invalid time input";
  }

  // Handle midnight
  if (hours === 0) {
    return `12:${minutes} am`;
  }

  // Handle noon
  if (hours === 12) {
    return `12:${minutes} pm`;
  }

  // Handle afternoon/evening (13–23)
  if (hours > 12) {
    return `${String(hours - 12).padStart(2, "0")}:${minutes} pm`;
  }

  // handle morning (1–11)
  return `${splitHours.padStart(2, "0")}:${minutes} am`;
}

// const currentOutput = formatAs12HourClock("08:00");
// const targetOutput = "08:00 am";
// console.assert(
//   currentOutput === targetOutput,
//   `current output: ${currentOutput}, target output: ${targetOutput}`
// );

// const currentOutput2 = formatAs12HourClock("23:00");
// const targetOutput2 = "11:00 pm";
// console.assert(
//   currentOutput2 === targetOutput2,
//   `current output: ${currentOutput2}, target output: ${targetOutput2}`
// );

// const currentOutput3 = formatAs12HourClock("00:00");
// const targetOutput3 = "12:00 am";
// console.assert(
//   currentOutput3 === targetOutput3,
//   `current output: ${currentOutput3}, target output: ${targetOutput3}`
// );

// const currentOutput4 = formatAs12HourClock("12:00");
// const targetOutput4 = "12:00 pm";
// console.assert(
//   currentOutput4 === targetOutput4,
//   `current output: ${currentOutput4}, target output: ${targetOutput4}`
// );

/*
I have realised that this is not the best use of DRY code therefore I have decided to refactor the test cases to the following. I am using an array where the tests are a pair made up of the current time and the target time
*/

const testCases = [
  // regular cases - morning, noon, afternoon, evening, midnight times
  ["03:05", "03:05 am"],
  ["08:00", "08:00 am"],
  ["12:00", "12:00 pm"],
  ["14:59", "02:59 pm"],
  ["23:00", "11:00 pm"],
  ["00:00", "12:00 am"],

  // edge cases - inputs that are at the boundary of the logic
  ["00:01", "12:01 am"],
  ["12:01", "12:01 pm"],
  ["11:59", "11:59 am"],
  ["23:59", "11:59 pm"],

  // invalid cases that are unusual or extreme
  ["12:00", "12:00 am"],
  ["24:00", "Invalid time input"],
  ["11:60", "Invalid time input"],
  ["3:45", "Invalid time input"],
  [":20", "Invalid time input"],
  [":", "Invalid time input"],
  ["", "Invalid time input"],
  ["four fifty nine pm", "Invalid time input"],
  [null, "Invalid time input"],
  [undefined, "Invalid time input"],
];

/*
A loop that goes through each test in the testCases array. The function is called with the current and target times from each test and then console.assert is used to check the result.
*/
for (const [current, target] of testCases) {
  const output = formatAs12HourClock(current);
  console.assert(
    output === target,
    `current output: ${current}, target output: ${target}`
  );
}

// The assertions logged as:
// Assertion failed: current output: 12:00, target output: 12:00 am
// Assertion failed: current output: 3:45, target output: Invalid time input
// Assertion failed: current output: :20, target output: Invalid time input
// Assertion failed: current output: :, target output: Invalid time input
