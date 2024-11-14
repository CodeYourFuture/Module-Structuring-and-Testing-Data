function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// Pad will be called 3 times to make sure that all hours, minutes and seconds are return with only 2 digits.


// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
//The first value of num will be zero, since the pad(totalHours) is the first to be called.

// c) What is the return value of pad is called for the first time?
//It is 00

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
//The last time pad is called is for remainingSeconds, which has a value of 1.
//So, num is assigned the value 1 in this final call to pad.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// In the last call remainingSeconds value will be 1. So when pad is called, num value will be 1.
// The pad function now converts the 1 to a string "1" and pads it to ensure it is at least 2 characters by adding a leading "0"
// The last value will be "01"
