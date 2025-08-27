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

// You will need to play computer with this example - use the Python Visualizer https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here

// Call formatTimeDisplay with an input of 61, now answer the following:
// 3 times  which is once each for hours, minutes, and seconds.
// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// 0, because pad is first called with totalHours, which is 0.
// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// '00' pad(0) becomes "0" → padded to "00" using padStart(2, "0").
// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// 1, because the last call to pad is with remainingSeconds, which is 1.
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// "01",  pad(1) becomes "1" → padded to "01" using padStart(2, "0").

// the final output of formatTimeDisplay(61) will be "00:01:01".
