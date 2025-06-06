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
  The validation statement checks if the initial input in to the formatAs12HourClock function is missing a string or not in the very first place, if the input is not a string it returns the invalid time input message and the function will not run.
  The !time condition checks for 'falsy' values that might be input such as null, undefined, "", 0, NaN, false.
  The typeof time !== "string" condition checks if the input is not a string. It will be true if time input is a number or a boolean, or an object for example). It ensures that the input must be a string in the first place.
  */
  if (!time || typeof time !== "string") {
    return "Invalid time input";
  }
  /*
  Once we have a valid string in the input, we split the input string into the hour and minute parts by splitting at the ":" and storing them to the variables splitHours and splitMinutes. This is more reliable than using slice straight away because inputs like "1:30" (or any single digit hour) would not work correctly with slice(0, 2) ("1:30" would be sliced at "1:")so using split() ensures we always get the correct hour and minute format "HH" and "MM", even if the hour or minute is a single digit.
*/
  const [splitHours, splitMinutes] = time.split(":");

  /* 
  If the total characters in splitHours value is less than 2, then it is padded with "0". The value is then converted to a number in order to do some numeric comparisons later (like checking for cases where it is midnight, noon, etc) and assigned tot he variable called hours
  */
  const hours = Number(splitHours.padStart(2, "0"));

  /*
  Checks if there is a minutes part to the input (for example some inputs may be just the hours only and miss the minutes, or , the minutes may only be a single number). If the minutes are missing from the initial input in the function, it uses "00" as the minutes value. If there is only a single character in the input  then it pads it with "0" to the left to make sure there are always 2 digits for formatting (i.e. "11:5" becomes "11:05",).
  */
  const minutes = splitMinutes ? splitMinutes.padStart(2, "0") : "00";

  //
  // Handle invalid hours and minutes inputs before handling the formatting
  if (
    isNaN(hours) || //checks if the value of the variable hours is "Not a Number". If this evaluates to true meaning hours is NOT a valid number (i.e. the input for hours was something like "Ab" for example) then we would return the 'invalid time input' message.
    isNaN(Number(minutes)) || //as the value of minutes is a string type, Number() tries to convert that string to a number, for example if minutes is "05" the number of minutes becomes 5, if the value of the variable minutes is "xy", then Number(minutes) becomes NaN. Therefore when isNaN is true (the value of minutes is "xy") then we would get the 'invalid time input' message returned.
    hours < 0 || // checks if the value of the variable hours is less than 0; negative hours don't exist in our 24 hour clock system
    hours > 23 || //checks if the value of the variable hours is more than 23;hours greater than 23 don't exist in our 24 hour clock system
    Number(minutes) < 0 || //converts the value of the variable minutes to a number and checks if they are less than 0; negative minutes don't exist in our 24 hour clock system
    Number(minutes) > 59 //converts the value os the minutes variable to a number then checks if minutes are greater than 59 - which doesn't exist in our 24 hour clock
  ) {
    return "Invalid time input";
  }

  /*
   Handles midnight - If the hour is 0 (which means midnight in 24-hour time), we display it as 12 in 12-hour format and use "am" to indicate midnight. I.e. "00:00" becomes "12:00 am" and "00:15" becomes "12:15 am".
   */
  if (hours === 0) {
    return `12:${minutes} am`;
  }

  /* 
  Handles noon - If the hour is 12 (which means noon in 24-hour time), we display it as 12 in 12-hour format and use "pm" to indicate midnight. I.e. "12:00" becomes "12:00 pm" and "12:15" becomes "12:15 pm".
  */
  if (hours === 12) {
    return `12:${minutes} pm`;
  }

  /* 
  Handles afternoon/evening (13–23) - If the hour is greater than 12 (which means afternoon or evening in 24-hour time), we subtract 12 from the hour to convert it to 12-hour format and use "pm". I.e. "14:59" becomes "02:59 pm" and "23:15" becomes "11:15 pm".
  */
  if (hours > 12) {
    return `${String(hours - 12).padStart(2, "0")}:${minutes} pm`;
  }

  /* 
  Handles morning (the rest of the available numbers, 1–11) - If the hour is between 1 and 11 (which means early hours/morning in 24-hour time), we keep the hours as they are (with padding if the total characters for hours is less than 2) and use "am". I.e. "03:05" becomes "03:05 am" and "08:15" becomes "08:15 am".
  */
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

// The failed assertions logged as:
// Assertion failed: current output: 12:00, target output: 12:00 am
// Assertion failed: current output: 3:45, target output: Invalid time input
// Assertion failed: current output: :20, target output: Invalid time input
// Assertion failed: current output: :, target output: Invalid time input
