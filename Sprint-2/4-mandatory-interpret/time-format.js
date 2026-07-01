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

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// pad will be called 3 times, once for totalHours, once for remainingMinutes, and once for remainingSeconds. 

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// The value assigned to num when pad is called for the first time is 0, which is the value of totalHours when the input is 61 seconds. 

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of pad when it is called for the first time is "00", which is the padded string representation of totalHours (0) when the input is 61 seconds.  

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The value assigned to num when pad is called for the last time in this program is 1, which is the value of remainingSeconds when the input is 61 seconds. 
// This is because 61 seconds is equal to 1 minute and 1 second, so the remaining seconds after calculating total minutes and hours is 1. 

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value of pad when it is called for the last time in this program is "01", which is the padded string representation of remainingSeconds (1) 
// when the input is 61 seconds.