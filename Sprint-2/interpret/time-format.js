/*function pad(num) { 
  return num.toString().padStart(2, "0");// convert to a string  take 2 caracters if short add "0" to the string
}

function formatTimeDisplay(seconds) {
  //This function converts a time duration (in seconds) into a formatted string in the format "HH:MM:SS" (hours, minutes, seconds).
  const remainingSeconds = seconds % 60;// Finds the leftover seconds that don’t make up a full minute. % (modulus operator) returns the remainder when seconds is divided by 60.
  const totalMinutes = seconds - remainingSeconds; //Converts the remaining seconds into full minutes by subtracting remainingSeconds and dividing by 60.
  const remainingMinutes = totalMinutes % 60; //Converts the remaining seconds into full minutes by subtracting remainingSeconds and dividing by 60.
  const totalHours = totalMinutes - remainingMinutes;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
} */

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
3;

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
//totalHours = 0 (calculated as (totalMinutes - remainingMinutes) / 60).
//pad is called first with totalHours.
// the value assigned to num is 0.

// c) What is the return value of pad is called for the first time?
//The first call to pad receives num = 0.
//Inside pad, 0 is converted to a string: "0".
//.padStart(2, "0") ensures it is at least 2 characters long by adding a leading zero: "00".
//The return value is "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
//The last call to pad is for remainingSeconds, which is 1:
//remainingSeconds = seconds % 60.
//With seconds = 61, remainingSeconds = 61 % 60 = 1.
// the value assigned to num is 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
//The last call to pad receives num = 1.
//Inside pad, 1 is converted to a string: "1".
//.padStart(2, "0") ensures it is at least 2 characters long by adding a leading zero: "01".
// return value is "01"

function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

//console.log(formatTimeDisplay(61));
//00:01:01
//gisdellabella@Giss-MBP interpret %

console.log(formatTimeDisplay(52));
00:00:52
gisdellabella@Giss-MBP interpret % 
