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
console.log(formatTimeDisplay(61)); // This line is inserted only to test the function. It returns "00:01:01"

// Here is a function that takes a number of seconds and returns a string formatted as "HH:MM:SS"
// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
//3 times
// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
//0
// c) What is the return value of pad is called for the first time?
// =============> write your answer here
//00
// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
/*
The value assigned to num when pad is called for the last time is 1.
The last call to pad in the template literal is pad(remainingSeconds). Since remainingSeconds = 61 % 60 = 1, the value passed to num is 1. This will return "01" after padding, resulting in the final output "00:01:01"
*/
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
/*
The return value of the last call to pad is "01".
Explanation: When pad is called with remainingSeconds (which equals 1), the parameter num receives the value 1. The function then converts it to a string "1", 
pads it to 2 characters with leading zeros to get "01", and returns this string. This returned value "01" 
is then inserted into the template literal as the last part of the time display, producing the final output "00:01:01".
*/
