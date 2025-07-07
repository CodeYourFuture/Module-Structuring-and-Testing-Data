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
console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> pad will be called 3 times in total.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> would be 0 because first call to pad is for totalHours which is 0 when seconds is 61.

// c) What is the return value of pad is called for the first time?
// =============> would be 00.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> It would be 01 because the last call to pad is for remainingSeconds which is 01 when seconds is 61.
