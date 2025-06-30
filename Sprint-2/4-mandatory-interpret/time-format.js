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
// =============> write your answer here: When formatTimeDisplay is called four times pad will be called, one for remainingSeconds, one for remainingMinutes, one for totalMinutes and one for totalHours.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here: When pad is called for thee first time, num will be assigned the value of 1, which is the value of remainingSeconds.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here: The return value of pad when called for the first time will be `01` because it pads the number 1 with a leading zero to make it two digits.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here: When pad is called for the last time, num will be assigned the value of 0, which is the value of totalHours.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here: when pad is called for the last time, the return value will be `0` because it pads the number 0 with a leading zero to make it two digits.
