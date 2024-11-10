// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

/* this function does not cover edge cases and minutes.
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}
  */
//this function below is an updated, advanced version of the function above.
function formatAs12HourClock(time) {
  let converted = Number(time.slice(0,2));
  let minutes = time.slice(-3);
  //consider special cases first.
  if (converted === 0 ) {
    return "00:00 midnight";
  }
  else if (converted === 24) {
    let specialCase24 = 24-12;
    return `${specialCase24}${minutes} am`

  }
  else if (converted === 12) {
    return `${converted}${minutes} pm`;
  }
  else if (converted>12){
    let above12 = converted-12;
    return `${above12}${minutes} pm`;
  }
  else{
    let below12 = converted.toString().padStart(2,"0");
    return `${below12}${minutes} am`;}
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
