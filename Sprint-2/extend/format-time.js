// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {

    //split the input time string into hours and minute parts.
    let[hours,minute]=time.split(":");
    //convert hours to number 
    hours=Number(hours);
    //set the suffix to"pm" if the hours is 12 or higher ;otherwise ,set it to "am"
    let suffix=hours>=12? "pm": "am";
    //adjust hour value for 12-hour format .
  if (hours === 0) {
      return `12:00 am`;  // Midnight case
    } else if (hours === 12) {
      return `12:00 pm`;  // Noon case
    } else if (hours > 12) {
      return `${hours - 12}:00 pm`;  // PM times (13:00 - 23:59)
    }
 
  //ensure hours and minute are two digits ,padding with"0"if needed .
  hours=hours.toString().padStart(2,"0");
  minute=minute.padStart(2,"0");
  //return the formatted 12-hour 
  return `${hours}:${minute} ${suffix}`;
}
const currentOutput = formatAs12HourClock("01:50");
const targetOutput = "01:50 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);
console.log(currentOutput);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
console.log(currentOutput2);
