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
// 3 times - totalHours, remainingMinutes, remainingSeconds

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// When formatTimeDisplay(61) is called:
//seconds = 61
//remainingSeconds = 61 % 60 = 1
//totalMinutes = (61 - 1) / 60 = 1
//remainingMinutes = 1 % 60 = 1
//totalHours = (1 - 1) / 60 = 0

// c) What is the return value of pad is called for the first time?
//When pad(0) is called:

//num.toString() converts 0 to "0".
//.padStart(2, "0") ensures the string is at least 2 characters long by padding it with "0" at the start.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
//The last time pad is called is for remainingSeconds, which is the value of 1 in this case (from remainingSeconds = 61 % 60 = 1
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// When pad(1) is called:

//num.toString() converts 1 to "1".
//.padStart(2, "0") ensures the string is at least 2 characters long by padding it with "0" at the start.
