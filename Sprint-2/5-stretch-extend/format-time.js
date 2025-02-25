// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

//function formatAs12HourClock(time) {
  //const hours = Number(time.slice(0, 2));
  //if (hours > 12) {
    //return `${hours - 12}:00 pm`;
  //}
  //return `${time} am`;
//}

//const currentOutput = formatAs12HourClock("08:00");
//const targetOutput = "08:00 am";
//console.assert(
  //currentOutput === targetOutput,
  //`current output: ${currentOutput}, target output: ${targetOutput}`
//);

//const currentOutput2 = formatAs12HourClock("23:00");
//const targetOutput2 = "11:00 pm";
//console.assert(
  //currentOutput2 === targetOutput2,
  //`current output: ${currentOutput2}, target output: ${targetOutput2}`
//);


function formatAs12HourClock(time) {
  let hours = Number(time.slice(0, 2));
  let minutes = time.slice(3, 5);
  let period = hours >= 12 ? "pm" : "am";

  if (hours === 0) {
    hours = 12;
  } 
  
  else if (hours > 12) {
    hours -= 12;
  }

  return `${hours}:${minutes} ${period}`;
}

console.assert(formatAs12HourClock("08:00") === "8:00 am", "Test Failed: 08:00");
console.assert(formatAs12HourClock("00:00") === "12:00 am", "Test Failed: 00:00");


console.assert(formatAs12HourClock("12:00") === "12:00 pm", "Test Failed: 12:00");
console.assert(formatAs12HourClock("23:00") === "11:00 pm", "Test Failed: 23:00");


console.assert(formatAs12HourClock("09:15") === "9:15 am", "Test Failed: 09:15");
console.assert(formatAs12HourClock("21:30") === "9:30 pm", "Test Failed: 21:30");

console.log("✅ All tests passed!");
