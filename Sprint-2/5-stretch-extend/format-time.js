// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3,6);

  if (hours > 12) {
    
    const convertedHour =  hours - 12
    const  paddedHour = convertedHour.toString().padStart(2, '0')
    return `${paddedHour}:${minutes} pm`;
  }

  else if(hours=== 0){
    const newHour= hours+ 12;
    return `${newHour}:${minutes} am`;}
  
  else if(hours=== 12){
    return `12:${minutes} pm`;

  }



  else if (hours < 12){
   const paddedHour2 = hours.toString().padStart(2, '0')
    
  return `${paddedHour2}:${minutes} am`;
}  
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

const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
   `current output: ${currentOutput3}, target output: ${targetOutput3}`
);


const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
   `current output: ${currentOutput4}, target output: ${targetOutput4}`
);