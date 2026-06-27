function pad(num) {
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  return numString;
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

const seconds = 61;
console.log(formatTimeDisplay(seconds));
// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// For each formatTimeDisplay is called, pad will be called 3 times. 1. pad(totalHours), 2. pad(remainingMinutes), 3. pad(remainingSeconds).

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// The value assigned to num when pad is called for the first time will be 0.

// c) What is the return value of pad is called for the first time?
// The return value of pad when it is called for the first time will be "00". 

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// The value assigned to num when pad is called for the last time in this program will be 1. Because, pad is called for the last time 
// for the value of remainingSeconds.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// The return value of pad when it is called for the last time in this program will be "01". Because, after converting num.toString(1)
// the length of the string "1" is 1 character. So it checks in while (numString.length < 2) and founds "1" which is less than 
// 2 character length. Then it will go inside numString = "0" + numString; and executes the function and will return "01".
