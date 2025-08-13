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
// =============> Pad will be called 3 times, once for each of the totalHours, 
// remainingMinutes, and remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

console.log(formatTimeDisplay(61)); // Output: "00:01:01" 

// b) What is the value assigned to num when pad is called for the first time?
// =============> When pad is called for the first time, the value assigned to num is 0 (from totalHours).

// c) What is the return value of pad is called for the first time?
// =============> The return value of pad when called for the first time is "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> When pad is called for the last time, the value assigned to num is 1.
// The reason is that the last call to pad is for the remainingSeconds, which is 1 in this case.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> The return value of pad when called for the last time is "01".
// The reason is that pad converts the number 1 to a string and pads it with a leading zero, 
// resulting in "01".
