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

  let suffix = ""
  let hours = Number(time.slice(0,2)); //convert to number to enable comparisons in if statement
  const mins = time.slice(3);

  if (hours==0) { // if time entered was 00:MM, then it's midnight and the time has just flipped to am
    hours = 12;  // in 12 hours clock, 00 is not allowed, so add 12 => 12:00 am for midnight
    suffix = "am";
  }
  else if (hours<12) { // hours 1 through 11 are am hours
    suffix = "am";
  }
  else if (hours==12) { // at midday, the time flips to pm
    suffix = "pm";
  }
  else {  // hours > 12 => time is in the afternoon/night
    hours=hours-12; 
    suffix = "pm";
  }

  return `${pad(hours)}:${mins} ${suffix}`;

}

// Test cases

const testStrings = {
  //object with key as input and item as expected output
  "08:00":"08:00 am",    //check am
  "23:00": "11:00 pm",  //check pm
  "00:00":"12:00 am",   //midnight edge case
  "12:00":"12:00 pm",   //midday edge case
  "11:11":"11:11 am"   //check minutes handled
}

// NOTES FOR ME ABOUT THE FOR...OF TESTING THINGY
// for...of iterates over the values in something
// objects aren't iterable. Object.entries() returns an array of the entries in an object
// so here that's like [["08:00", "08:00am"], ["23:00", "11:00 pm"].....]
// [input,expectedOutput] unpacks each value that Object.entries(..) returns into a separate variable
// ie on the first run, Object.entries would return ["08:00", "08:00 am"], which would get unpacked to input = "08:00" and expectedOutput = "08:00 am"

for (const [input, expectedOutput] of Object.entries(testStrings)) {
  const currentOutput = formatAs12HourClock(input);
  console.assert(
    expectedOutput === currentOutput,
    `desired output: ${expectedOutput}, actual output: ${currentOutput}`
  )
}

// CASE 4 check edge case: 24:00
const output4 = formatAs12HourClock("24:00");
//does log an error message

// CASE 6 check letters entered
const output6 = formatAs12HourClock("abcdefg");
// does log an error message

// before putting test cases in an object they looked like this:
// CASE 1 check it works for am
// const output = formatAs12HourClock("08:00");
// const target = "08:00 am";
// console.log(output);
// console.assert(
//   output === target,
//   `Case 1: output: ${output}, target output: ${target}`
// );

// // CASE 2 check it works for pm
// const output2 = formatAs12HourClock("23:00");
// const target2 = "11:00 pm";
// console.log(output2);
// console.assert(
//   output2 === target2,
//   `Case 2 output: ${output2}, target output: ${target2}`
// );

// // CASE 3 check edge case: midnight, 00:00
// const output3 = formatAs12HourClock("00:00");
// const target3 = "12:00 am";
// console.log(output3);
// console.assert(
//   output3 === target3,
//   `Case 3 output: ${output3}, target output: ${target3}`
// );




// // CASE 5 check edge case: midday, 12:00pm
// const output5 = formatAs12HourClock("12:00");
// const target5 = "12:00 pm";
// console.log(output5);
// console.assert(
//   output5 === target5,
//   `Case 5 output: ${output5}, target output: ${target5}`
// );


// // CASE 7 check minutes handled
// const output7 = formatAs12HourClock("11:11");
// const target7 = "11:11 am";
// console.log(output7);
// console.assert(
//   output7 === target7,
//   `Case 7 output: ${output7}, target output: ${target7}`
// );