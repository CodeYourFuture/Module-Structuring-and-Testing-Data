// THIS IS THE LATEST SOLUTION TO THE PROBLEM FROM THE PREP.
// MAKE SURE TO DO THE PREP BEFORE YOU DO THE COURSEWORK
// YOUR TASK IS TO WRITE TESTS FOR AS MANY DIFFERENT GROUPS OF INPUT DATA OR EDGE CASES AS YOU CAN, AND FIX ANY BUGS YOU FIND.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}

// CASE 1 check it works for am
const output = formatAs12HourClock("08:00");
const target = "08:00 am";
console.assert(
  output === target,
  `Case 1: output: ${output}, target output: ${target}`
);

// CASE 2 check it works for pm
const output2 = formatAs12HourClock("23:00");
const target2 = "11:00 pm";
console.assert(
  output2 === target2,
  `Case 2 output: ${output2}, target output: ${target2}`
);

// CASE 3 check edge case: 00:00
const output3 = formatAs12HourClock("00:00");
const target3 = "12:00 am";
console.assert(
  output3 === target3,
  `Case 3 output: ${output3}, target output: ${target3}`
);


// CASE 4 check edge case: 24:00
const output4 = formatAs12HourClock("24:00");
const target4 = target3 //24:00 on Tuesday is the same as 00:00 on Wednesday
console.assert(
  output4 === target4,
  `Case 4 output: ${output4}, target output: ${target4}`
);

// CASE 5 check edge case: 12:00pm
const output5 = formatAs12HourClock("12:00");
const target5 = "12:00 pm";
console.assert(
  output5 === target5,
  `Case 5 output: ${output5}, target output: ${target5}`
);