// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(2)
  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }if(hours === 0){
    return `${12}:${minutes} am`
  }if(hours === 12){
    return `${12}:${minutes} pm`
  }
  return `${hours}${minutes} am`;
}
// there were few problems

/*
expected output
"08:00" → "08:00 am"
"23:00" → "11:00 pm"
"00:00" → "12:00 am"
"12:00" → "12:00 pm"
"13:00" → "1:00 pm"
"11:00" → "11:00 am"
"15:00" → "3:00 pm"
"00:01" → "12:01 am"
"12:01" → "12:01 pm"
*/
console.log(formatAs12HourClock("11:22"))

// const currentOutput = formatAs12HourClock("00:01");
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