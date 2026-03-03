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
// The `pad` function will be called three times when `formatTimeDisplay` is called, once for each of the time components: hours, minutes, and seconds. Each component is passed to the `pad` function to ensure it is displayed with at least two digits, adding a leading zero if necessary.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// When `formatTimeDisplay(61)` is called, the first time `pad` is called, `num` is assigned the value of `totalHours`, which is 0.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of `pad(0)` is "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// When `formatTimeDisplay(61)` is called, the last time `pad` is called, `num` is assigned the value of `remainingSeconds`, which is 1.
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value of `pad(1)` is "01".