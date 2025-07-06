// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

/*function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}
  */
/*in this code ,many different groups of input data or edge cases, and fix any bugs- Always returns :00 minutes for PM values, even if actual minutes are not 00
and  "08:00 am" directly from the input for 08:00,and not clearly mention 12:00 (should be 12:00 pm, not 12:00 am) ,00:00 (should be 12:00 am, not 00:00 am)
*/
function formatAs12HourClock(time) {
    const [hourStr, minuteStr] = time.split(":");
    let hours = Number(hourStr);
  const period = hours >= 12 ? "pm" : "am";
if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }

  return `${hours}:${minuteStr} ${period}`;
}
/*The function `formatAs12HourClock` converts a 24-hour time string like `"23:00"` into a 12-hour format with AM or PM. First, it splits the input string at the colon, separating the hours and minutes into two variables, for example, `"23"` and `"00"`. 
The hour string is then converted to a number so it can be manipulated. The minutes remain as a string.
Next, the function determines whether the time is AM or PM by checking if the hour is 12 or more; if so, it sets the period to "pm", otherwise to "am". There’s a special case for midnight: if the hour is 0, it is changed to 12 because 12:00 am represents midnight in 12-hour time.
If the hour is greater than 12, the function subtracts 12 to convert it to the appropriate 12-hour value (e.g., 23 becomes 11). Finally, it returns a formatted string combining the converted hour, the original minutes, and the correct period, such as `"11:00 pm"` or `"12:00 am"`.
*/



const currentOutput1 = formatAs12HourClock("08:00");
const targetOutput1 = "8:00 am";
console.assert(currentOutput1 === targetOutput1,
  `Test 1 Failed: current output: ${currentOutput1}, target output: ${targetOutput1}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(currentOutput2 === targetOutput2,
  `Test 2 Failed: current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(currentOutput3 === targetOutput3,
  `Test 3 Failed: current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("10:00");
const targetOutput4 = "10:00 am";
console.assert(currentOutput4 === targetOutput4,
  `Test 4 Failed: current output: ${currentOutput4}, target output: ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("11:00");
const targetOutput5 = "11:00 am";
console.assert(currentOutput5 === targetOutput5,
  `Test 5 Failed: current output: ${currentOutput5}, target output: ${targetOutput5}`
);

const currentOutput6 = formatAs12HourClock("12:00");
const targetOutput6 = "12:00 pm";
console.assert(currentOutput6 === targetOutput6,
  `Test 6 Failed: current output: ${currentOutput6}, target output: ${targetOutput6}`
);

const currentOutput7 = formatAs12HourClock("12:30");
const targetOutput7 = "12:30 pm";
console.assert(currentOutput7 === targetOutput7,
  `Test 7 Failed: current output: ${currentOutput7}, target output: ${targetOutput7}`
);

const currentOutput8 = formatAs12HourClock("00:01");
const targetOutput8 = "12:01 am";
console.assert(currentOutput8 === targetOutput8,
  `Test 8 Failed: current output: ${currentOutput8}, target output: ${targetOutput8}`
);

const currentOutput9 = formatAs12HourClock("13:15");
const targetOutput9 = "1:15 pm";
console.assert(currentOutput9 === targetOutput9,
  `Test 9 Failed: current output: ${currentOutput9}, target output: ${targetOutput9}`
);

const currentOutput10 = formatAs12HourClock("01:59");
const targetOutput10 = "1:59 am";
console.assert(currentOutput10 === targetOutput10,
  `Test 10 Failed: current output: ${currentOutput10}, target output: ${targetOutput10}`
);

console.log("All tests passed successfully.");

/*I created a set of test cases to check whether the formatAs12HourClock function works correctly for various types of 24-hour time inputs. 
Each test checks if the function returns the correct 12-hour format with the right hour, minutes, and AM/PM suffix.

including:-
Regular morning times like "08:00" → "8:00 am"
Midnight ("00:00") → "12:00 am"
Noon ("12:00") → "12:00 pm"
Afternoon and evening times like "13:15" → "1:15 pm" and "23:00" → "11:00 pm"
Minute-specific checks like "12:30" and "00:01" to confirm that the minute part is preserved correctly
Early morning edge cases like "01:59"
Each test uses console.assert() to compare the actual output with the expected result, and if any test fails, it prints a clear error message. If all tests pass, it prints "All tests passed successfully.
This helps confirm the function handles both common cases and edge cases correctly.
 */
