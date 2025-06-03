// THIS IS THE LATEST SOLUTION TO THE PROBLEM FROM THE PREP.
// MAKE SURE TO DO THE PREP BEFORE YOU DO THE COURSEWORK
// YOUR TASK IS TO WRITE TESTS FOR AS MANY DIFFERENT GROUPS OF INPUT DATA OR EDGE CASES AS YOU CAN, AND FIX ANY BUGS YOU FIND.

function pad(num) {
  //adds leading 0s to string until it reaches length 2
  return num.toString().padStart(2, "0");
}

function formatAs12HourClock(time) {

  if (!/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(time)) { //if string DOESN'T look like HH:MM, min 00:00/max 23:59
    console.log(`You entered "${time}". formatAs12HourClock only works for times written HH:MM. min 00:00, max 23:59.`);
    return;
  }

  let hours = Number(time.slice(0,2)); //convert to number to enable comparisons in if statement
  const mins = time.slice(3);

  if (hours==0) {
    hours += 12;
    return `${hours}:${mins} am`
  }  
  else if (hours<12) {
    hours = pad(hours);
    return `${hours}:${mins} am`;
  }
  else if (hours==12) {
    return `${hours}:${mins} pm`
  }
  else {
    hours=hours-12;
    return `${hours}:${mins} pm`;
  }


  // const hours = Number(time.slice(0, 2)); // returns first two characters of string
  // if (hours > 12) {
  //   return `${hours - 12}:00 pm`;
  // }
  // return `${time} am`;
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

// CASE 3 check edge case: midnight, 00:00
const output3 = formatAs12HourClock("00:00");
const target3 = "12:00 am";
console.assert(
  output3 === target3,
  `Case 3 output: ${output3}, target output: ${target3}`
);


// CASE 4 check edge case: 24:00
// const output4 = formatAs12HourClock("24:00");
//does log an error message

// CASE 5 check edge case: midday, 12:00pm
const output5 = formatAs12HourClock("12:00");
const target5 = "12:00 pm";
console.assert(
  output5 === target5,
  `Case 5 output: ${output5}, target output: ${target5}`
);

// CASE 6 check letters entered
// const output6 = formatAs12HourClock("abcdefg");
// does log an error message

// CASE 7 check minutes handled
const output7 = formatAs12HourClock("11:11");
const target7 = "11:11 am";
console.assert(
  output7 === target7,
  `Case 7 output: ${output7}, target output: ${target7}`
);