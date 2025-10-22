function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(num) {
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
// 3 times: the return statement contains 3 pad calls within the formatTimeDisplay function.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// num = 0 as when the input is 61 seconds, remainingSeconds = 1, totalMinutes = 1, remainingMinutes = 1, totalHours = 0. 
// totalHours = (totalMinutes - remainingMinutes) / 60 = (1 - 1) / 60 = 0 / 60 = 0 (dividing once into minutes and once into hours).

// c) What is the return value of pad when called for the first time?
// "00" as num is 0, and padStart(2, "0") adds a leading zero to make it two digits.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// The last time pad is called, num is assigned the value of remainingSeconds, which is 1.
// Go to line const remainingSeconds = seconds % 60; and use input of seconds = 61 to calculate remainder of 61/60 = 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// The last time pad is called, it uses remainingSeconds which is 1
// The call is pad(1) which converts to a string and adds a leading 0 if there's less than 2 characters
// So, the return value is "01". 
// The final formatted time string for an input of 61 seconds is "00:01:01". 
