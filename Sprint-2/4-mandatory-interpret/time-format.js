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
// 3 times,`${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
// Call formatTimeDisplay with an input of 61, now answer the following:
//
// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// num = 0 — from pad(totalHours)
// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// "00" — pad(0) → "0".padStart(2, "0") → "00"
// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// num = 1 — from pad(remainingSeconds), which is the third and last call.
// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
//  "01" — because 1.toString() is "1" and .padStart(2, "0") → "01"

