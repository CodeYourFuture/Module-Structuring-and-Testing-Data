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

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
Three times, once for the hours, minutes and seconds. 

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
 The value assighned to num when the pad function called for the first time is 0, because the total hours is 0.

// c) What is the return value of pad is called for the first time?
 the return value of pad when it is called for the first time is '00' because the pad function add a '0' to the left of the num to make it 2 characters long. AS the num is 0 the return value is also ' 0'.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
the value assighned to num when the pad function is called for the last time is 1 , because the remaining seconds is 1, as 61 seconds os equal to 1 minute and 1 second.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
the return value of pad when it is called for the last time is '01' because the pad function adds a '0' to the left of the num to make it 2 characters long. As the num is 1, the return value is '01'.