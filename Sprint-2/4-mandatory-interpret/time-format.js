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
// =============> write your answer here
// When formatTimeDisplay is called, pad will be called three times. This is because pad is called for totalHours, remainingMinutes, and remainingSeconds in the return statement of the formatTimeDisplay function.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// When formatTimeDisplay is called with an input of 61, the value assigned to num when pad is called for the first time will be 0. This is because totalHours will be calculated as (totalMinutes - remainingMinutes) / 60, which will be (1 - 1) / 60 = 0. Therefore, pad(0) will be called for the first time.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of pad when it is called for the first time with num equal to 0 will be "00". This is because pad uses the padStart method to convert the number to a string and pads it with leading zeros until it reaches a length of 2. Therefore, pad(0) will return "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// When formatTimeDisplay is called with an input of 61, the value assigned to num when pad is called for the last time will be 1. This is because remainingSeconds will be calculated as seconds % 60, which will be 61 % 60 = 1. Therefore, pad(1) will be called for the last time in this program.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value of pad when it is called for the last time with num equal to 1 will be "01". This is because pad uses the padStart method to convert the number to a string and pads it with leading zeros until it reaches a length of 2. Therefore, pad(1) will return "01".
