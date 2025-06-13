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
// # 3 times, once for each of totalHours, remainingMinutes, and remainingSeconds

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// 1, which is the value of totalHours when seconds is 61

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// "01", because pad converts the number 1 to a string and pads it with a leading zero to make it two characters long
// Call formatTimeDisplay with an input of 3661, now answer the following:

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// 1, which is the value of remainingSeconds when seconds is 3661. The totalHours is 1, remainingMinutes is 1, and remainingSeconds is 1.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// "01", because pad converts the number 1 to a string and pads it with a leading zero to make it two characters long
console.log(formatTimeDisplay(61)); // "00:01:01"
