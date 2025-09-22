let timesToBeCalled = 0;

function pad(num) {
  timesToBeCalled += 1;
  console.log(
    ` Pad has been called ${timesToBeCalled} times and num is ${num}`
  );
  console.log(` The return value will be ${num.toString().padStart(2, "0")}`);
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
// =============> write your answer here
// The pad function will be called 3 times when formatTimeDisplay is called.
// 1st: for totalHours
// 2nd: for remainingMinutes
// 3rd: for remainingSeconds

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// The value assigned to num is 0 when pad is called for the first time because 61 seconds is 0 hours, 1 minute, and 1 second.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of pad is "00" in string format because 0 is padded to 2 digits with leading zeros.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The value assigned to num is 1 when pad is called for the last time.
// It is because the remaining seconds is 1 second after taken 60 seconds for 1 minute.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value assigned to num is "01" in string format.
// It is because 1 second is padded to 2 digits with a leading zero.
