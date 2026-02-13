
function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;
  console.log(`${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`);
  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
formatTimeDisplay(61); // ===> 00:01:01

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> pad function will be called `3` times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> the num value is '0' when pad is called for the first time.

// c) What is the return value of pad is called for the first time?
// =============> the return value of num is '00' when pad is called for the first time.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> the value of num is '1' when pad is called for the last time. to add more remainingSeconds = 61 % 60 = 1. this is why we have 1 for num value.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> the return value of num is '01' when pad is called last time. in short, remainingSeconds = 61 % 60 = 1 as num equals 1 then we have 0 from padStart(2, "0"); so the result will be "01".