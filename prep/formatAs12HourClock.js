
//1. we write the function declaration 
//function formatAs12HourClock() {}



//2. we write an assertion for the function
//to tidy up the code we write variables for our assertion
/*const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";

console.assert(
    //// the condition we’re checking
  currentOutput === targetOutput,
  // a message string that will be logged to the console if the condition is false.
  `current output: ${currentOutput}, target output: ${targetOutput}`
);*/
  
//3. we pass a parameters and add "am" with template literal
/*function formatAs12HourClock(time) {
    return `${time} am`;

}*/


//4.Checking different cases
//so far we check for times between midnight and midday. In these cases, there is a pattern: take the current time and add " am" to the end.
//we write more assertions
/*const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);*/

//4. learn to interpret the errors 


//5. trying to come up with strategy to solve the problem
//what should we do for the time beyond midday?
//remmeber one problem at the time

//6.sub-goal1 
// find a value for the hours from the time input
//Number(time.slice(0,2)) is an expression that evaluates to the hours from time

/*function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    return "Don't know how to handle times in the afternoon yet";
  }
  return `${time} am`;
}
formatAs12HourClock('4:00')*/


//sub-goal2
/*if (Number(time.slice(0, 2)) > 12) {
  return `${Number(time.slice(0, 2)) - 12}:00 pm`;
}*/

/*function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    return `${Number(time.slice(0, 2)) - 12}:00 pm`;
  }
  return `${time} am`;
}
*/
//7.time to refactor and write prettier code
// we declare a variable called hour
/*function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}*/

//8.How to handle adge cases like hour= "00:00" "24:00" "12:00"

//nw function considering the edge cases: \
function formatAs12HourClock(time) {

  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3);

  if (hours === 0) {
    return `12:${minutes} am`; // Midnight case
  } else if (hours === 12) {
    return `12:${minutes} pm`; // Noon case
  } else if (hours > 12) {
    return `${hours - 12}:${minutes} pm`; // Afternoon/evening case
  } else {
    return `${hours}:${minutes} am`; // Morning case
  }
}






const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "8:00 am";
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

console.log(formatAs12HourClock("08:00"))