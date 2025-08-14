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
// =============> 'pad' will be called 3 times when 'formatTimeDisplay' is called.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> The value assigned in this case will be 0.

// c) What is the return value of pad when it's called for the first time?
// =============> The return value is '00'.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> the value assigned to 'num' is 1, because when pad is called for the last time,
//  it is called with the 'remainingSeconds', which is 1 in this case.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The return value assigned to 'num' is still 1 for the reasons cited above.
// The return value of pad might be different in this case, but it's not asked.
