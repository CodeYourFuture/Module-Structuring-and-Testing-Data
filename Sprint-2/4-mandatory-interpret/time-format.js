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
// The function formatTimeDisplay will call pad three times: once for totalHours, once for remainingMinutes, and once for remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// The value assigned to num when pad is called for the first time is 1. This is because totalHours is calculated as (61 - 1) / 60, which equals 1.
// The first call to pad is for totalHours, which is 1.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of pad when called for the first time is "01". This is because pad converts the number 1 to a string and pads it with a leading zero to ensure it has at least two digits.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The value assigned to num when pad is called for the last time is 1. This is because remainingSeconds is calculated as 61 % 60, which equals 1.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value assigned to num when pad is called for the last time is "01".
//  This is because pad converts the number 1 to a string and pads it with a leading zero to ensure it has at least two digits.
// The final output of formatTimeDisplay(61) will be "00:01:01", where each component is padded to two digits.
console.log(formatTimeDisplay(61)); // Output: "00:01:01"
