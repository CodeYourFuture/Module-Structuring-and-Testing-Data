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
// =============> write your answer here : three times in Line 11 with return.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here : 0, because totalHours is 0.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here : "00", because num is converted to string and padded to 2 characters with "0".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here : 1, because remainingSeconds is 1 on python tutor.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here : "01", because num is converted to string and padded to 2 characters with "0". That's mean "1" becomes "01".
