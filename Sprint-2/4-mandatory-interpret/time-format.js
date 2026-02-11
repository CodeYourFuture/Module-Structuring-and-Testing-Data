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

// pad is called 3 times.


// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here

// The value assigned to num the first time is 0.


// c) What is the return value of pad is called for the first time?
// =============> write your answer here

// The return value is "00" because 0 becomes "0"
// and padStart adds a leading zero.


// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

// The value assigned to num the last time is 1,
// because remainingSeconds is 1


// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

//The return value is "01" because 1 becomes "1"
// when converted to a string, and padStart adds a leading zero.


